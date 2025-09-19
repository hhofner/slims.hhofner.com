import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content', extension: 'md' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          description: 'A brief description of the post',
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
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value,
          }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
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
      format: { contentField: 'content', extension: 'md' },
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
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { contentField: 'content', extension: 'md' },
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
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/content/projects',
            publicPath: '/src/content/projects/',
          },
        }),
      },
    }),
  },
});