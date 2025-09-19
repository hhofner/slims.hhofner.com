# Keystatic CMS Setup Documentation

This document outlines all the changes made to integrate Keystatic CMS with your Astro blog.

## Overview

Keystatic is now configured to provide a mobile-friendly content management system for your blog. You can access it at `http://localhost:4321/keystatic` during development.

## Dependencies Added

### New Packages Installed
```bash
npm install @keystatic/core @keystatic/astro @astrojs/markdoc
```

- **@keystatic/core**: Core Keystatic functionality
- **@keystatic/astro**: Astro integration for Keystatic
- **@astrojs/markdoc**: Required for Keystatic's rich text editing (compatible with Astro 4)

## Configuration Changes

### 1. Astro Configuration (`astro.config.mjs`)

**Added imports:**
```javascript
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
```

**Updated integrations:**
```javascript
integrations: [tailwind(), sitemap(), mdx(), markdoc(), pagefind(), react(), keystatic()],
```

**Added hybrid output mode:**
```javascript
output: "hybrid",
```

### 2. Keystatic Configuration (`keystatic.config.ts`)

**New file created** with the following collections:

#### Blog Collection
- **Path pattern**: `src/content/blog/*/index`
- **Format**: Markdoc with `.md` extension
- **Fields**:
  - `title`: Slug field (used for URL)
  - `description`: Text field
  - `date`: Date field (defaults to today)
  - `draft`: Checkbox
  - `status`: Select field (published/draft)
  - `tags`: Array of text fields
  - `content`: Markdoc field with image support

#### Devlog Collection
- **Path pattern**: `src/content/devlog/*`
- **Same field structure** as blog (minus status and tags)

#### Projects Collection
- **Path pattern**: `src/content/projects/*/`
- **Additional fields**: `demoURL`, `repoURL`

### 3. Astro Content Schema Update (`src/content/config.ts`)

**Added `status` field** to blog collection schema:
```typescript
status: z.enum(['published', 'draft']).optional(),
```

## File Structure Changes

### Blog Post Migration
All single-file blog posts were migrated to folder structure for consistency:

**Before:**
```
src/content/blog/
├── my-post.md
└── another-post.md
```

**After:**
```
src/content/blog/
├── my-post/
│   └── index.md
└── another-post/
    └── index.md
```

**Files migrated:**
- `compelled.md` → `compelled/index.md`
- `getting-bored.md` → `getting-bored/index.md`
- `indeces-as-keys-in-react.md` → `indeces-as-keys-in-react/index.md`
- `language-documentation.md` → `language-documentation/index.md`
- `my-goals-for-2024.md` → `my-goals-for-2024/index.md`
- `my-tools.md` → `my-tools/index.md`
- `remembered-yet-forgotten.md` → `remembered-yet-forgotten/index.md`
- `what-I-want-to-learn-in-2022.md` → `what-I-want-to-learn-in-2022/index.md`

## Bug Fixes Applied

### 1. YAML Frontmatter Issues
**Files fixed:**
- `src/content/blog/04-markdown-syntax/index.mdx`: Removed extra `---` delimiter
- `src/content/blog/02-blog-collection/index.md`: Removed multiple extra `---` delimiters

### 2. Missing Schema Fields
Added `status` field to handle existing blog posts that had `status: published` in frontmatter.

### 3. Image Handling
- **Configured image directory**: `src/content/blog`
- **Fixed image paths**: Updated relative paths to use `./image.jpg` format
- **Cleaned up nested folders**: Moved images to correct locations

## Features Enabled

### Mobile Editing
- **Responsive admin interface** works on iPhone Safari
- **Add to Home Screen** capability for app-like experience
- **Touch-friendly** editing controls

### Image Support
- **Drag & drop uploads** directly into the editor
- **Co-located storage** with blog posts
- **Automatic path generation** in markdown

### Rich Text Editing
- **Markdoc-powered editor** with live preview
- **Formatting tools** (bold, italic, links, etc.)
- **Markdown compatibility** - outputs standard `.md` files

### Git Integration
- **Local file storage** - all changes saved as files
- **Version control ready** - works with your existing git workflow
- **No database required** - everything stored in your repository

## Usage Instructions

### Development
1. **Start dev server**: `npm run dev`
2. **Access admin**: Visit `http://localhost:4321/keystatic`
3. **Create posts**: Click "Blog Posts" → "Create Blog Post"
4. **Add images**: Drag from camera roll or file system into editor

### Mobile Usage (iPhone)
1. **Open Safari**: Navigate to `http://your-local-ip:4321/keystatic`
2. **Add to Home Screen**: Tap share icon → "Add to Home Screen"
3. **Edit on the go**: Open the home screen icon for app-like experience

### File Output
- **Blog posts**: Saved as `src/content/blog/post-slug/index.md`
- **Images**: Stored alongside posts in same folder
- **Format**: Standard markdown with frontmatter
- **Compatibility**: Works with existing Astro content collections

## Benefits Achieved

✅ **Mobile-first editing** - Write and edit posts from iPhone
✅ **Image workflow** - Easy drag & drop image handling
✅ **No vendor lock-in** - All content stored as markdown files
✅ **Existing content preserved** - All current posts remain functional
✅ **Git workflow compatible** - Changes tracked in version control
✅ **Zero deployment complexity** - Static site generation unchanged

## Next Steps (Optional)

### Production Deployment
For production editing, consider switching to GitHub-based storage:

```typescript
// In keystatic.config.ts
storage: {
  kind: 'github',
  repo: 'your-username/your-repo'
}
```

### Additional Features
- **Draft preview**: Add draft post preview functionality
- **Scheduled publishing**: Implement date-based publishing
- **SEO fields**: Add meta description, social image fields
- **Categories**: Add hierarchical categorization

---

**Setup completed successfully!** 🎉
Keystatic CMS is now fully integrated with your Astro blog.