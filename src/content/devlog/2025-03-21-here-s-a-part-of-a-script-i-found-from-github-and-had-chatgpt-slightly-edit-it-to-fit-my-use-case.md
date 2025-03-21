---
content: "Here's a part of a script I found from Github, and had ChatGPT slightly edit it to fit my use case. "
date: 2025-03-21
draft: false
---

Here's a part of a script I found from Github, and had ChatGPT slightly edit it
to fit my use case.

```javascript
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
    res = req("PUT", url, { message: "New via Drafts: " + slug, content: b64 });
  }

  var result = urlformat(SITE, PATH, slug, "");
  app.setClipboard(result);
}
```

I'm curious how the markdown will render.
