---
content: "Okay, I was able to fix the rendering of devlog posts. It was all thanks to the following Stackoverflow link:"
date: 2025-03-21
draft: false
---

Okay, I was able to fix the rendering of devlog posts. It was all thanks to the following Stackoverflow link:

[How to render multiple content entries](https://stackoverflow.com/a/78627257) 

In particular, I was trying to run await `render` calls in a map in the frontmatter. It gets a bit confusing understanding what actually gets returned because if you see: 

```typescript
const { Content, headings } = await post.render();

// and then in the template
<Content />
```

I am pretty tired to know okay, what exactly is happening if it's a component? Can I have a list of components that I just render?

The solution was easier, though:

```astro
<div class="space-y-8">
   {entriesByYear[year].map(async (entry) => {
      const { Content } = await entry.render()
         return (
            <article class="">
              <div class="mb-2 flex items-center justify-between">
                <span class="text-sm text-black/60 dark:text-white/60">
                  <FormattedDate date={entry.data.date} />
                </span>
              </div>
              <div class="prose prose-neutral dark:prose-invert">
                <Content />
              </div>
            </article>
    )})}
</div>
```