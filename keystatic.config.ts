import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*/index',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          description: 'A brief description of the post',
          validation: { length: { min: 1 } },
        }),
        date: fields.date({
          label: 'Publication Date',
          defaultValue: { kind: 'today' },
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Check to save as draft',
          defaultValue: false,
        }),
        status: fields.select({
          label: 'Status',
          description: 'Publication status',
          options: [
            { label: 'Published', value: 'published' },
            { label: 'Draft', value: 'draft' },
          ],
          defaultValue: 'published',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value,
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          images: {
            directory: 'src/content/blog',
            publicPath: '/src/content/blog/',
          },
        }),
      },
    }),
    devlog: collection({
      label: 'Dev Log',
      slugField: 'title',
      path: 'src/content/devlog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Check to save as draft',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          description: 'A brief description of the project',
        }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Check to save as draft',
          defaultValue: false,
        }),
        demoURL: fields.url({
          label: 'Demo URL',
          description: 'Link to live demo (optional)',
        }),
        repoURL: fields.url({
          label: 'Repository URL',
          description: 'Link to source code (optional)',
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
  },
});