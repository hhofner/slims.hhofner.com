/* Configuration */

var REPO = "slims.hhofner.com";
var SOURCE = "src/content/devlog";
var SITE = "blog.hhofner.com";
var PATH = "";
var OWNER = "hhofner";

var BASE = "https://api.github.com/repos";

/* Connection */

var http = HTTP.create();
var credential = Credential.create(
	"Github",
	"Insert Github API token from github.com/settings/tokens",
);
credential.addTextField("token", "Personal access token");
credential.authorize();

var TOKEN = credential.getValue("token");

/* Utils */

function pad(i) {
	return (i < 10 ? "0" : "") + i;
}

function formatDate(date) {
	return date.toISOString().split("T")[0];
}

function getSlug(_content) {
	// var slug = content.match(/^slug: (.*)$/m);
	// if (slug) return slug[1];
	// var firstLine = content.split("\n")[0].trim();
	// if (!firstLine) throw new Error("No valid title found");
	// return firstLine.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(
	// 	/^-|-$/g,
	// 	"",
	// );
	return "id" + Math.random().toString(16).slice(2);
}

function createFrontMatter(content, publishDate) {
	return `---\ncontent: \"${content.split("\n")[0]}\"\ndate: ${
		formatDate(publishDate)
	}\ndraft: false\n---\n\n`;
}

function req(method, url, data) {
	console.log(method + " " + url);
	var res = http.request({
		method: method,
		url: url,
		headers: {
			"Accept": "application/vnd.github.v3+json",
			"Authorization": "token " + TOKEN,
		},
		encoding: "json",
		data: data,
	});
	if (res.responseText) res.data = JSON.parse(res.responseText);
	return res;
}

function urlformat(/* ...bits */) {
	var d = new Date();
	var bits = [].filter.call(arguments, function (x) {
		return !!x;
	});
	return bits.join("/").replace("{year}", d.getFullYear()).replace(
		"{month}",
		pad(d.getMonth() + 1),
	).replace("{day}", pad(d.getDate()));
}

/* Logic */

function main() {
	var content = draft.content;
	var slug = getSlug(content);
	var publishDate = new Date();
	content = createFrontMatter(content, publishDate) + content;

	var url = urlformat(
		BASE,
		OWNER,
		REPO,
		"contents",
		SOURCE,
		PATH,
		`${formatDate(publishDate)}-${slug}.md`,
	);

	var b64 = Base64.encode(content);
	var res = req("GET", url, null);

	if ((res.statusCode == 200) && (res.data.type != "file")) {
		throw "Target file exists, but is not a file: " + res.data.type;
	} else if (res.statusCode == 200) {
		res = req("PUT", url, {
			message: "Update via Drafts: " + slug,
			content: b64,
			sha: res.data.sha,
		});
	} else {
		res = req("PUT", url, {
			message: "New via Drafts: " + slug,
			content: b64,
		});
	}

	var result = urlformat(SITE, PATH, slug, "");
	app.setClipboard(result);
}

main();
