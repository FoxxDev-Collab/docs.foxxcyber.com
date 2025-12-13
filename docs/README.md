# Foxx Cyber Documentation

Welcome to the Foxx Cyber documentation repository! This directory contains all product documentation for our security solutions.

## Product Documentation

### 📘 Bedrock CMMC
Comprehensive CMMC compliance platform for defense contractors and organizations handling CUI.

**Location:** `bedrock-cmmc/`
**URL:** https://docs.foxxcyber.com/bedrock-cmmc/intro

### 📗 Bedrock AG (Autonomous Governance)
AI-powered security governance and automated compliance monitoring platform.

**Location:** `bedrock-ag/`
**URL:** https://docs.foxxcyber.com/bedrock-ag/intro

### 📕 Bedrock SP (Security Platform)
Enterprise security operations platform with SIEM, SOAR, and threat intelligence capabilities.

**Location:** `bedrock-sp/`
**URL:** https://docs.foxxcyber.com/bedrock-sp/intro

## Adding New Documentation

### Quick Start

1. **Choose the product folder** where your documentation belongs
2. **Copy a template** from `_templates/`
3. **Create your markdown file** in the appropriate category folder
4. **Add frontmatter** to control positioning and metadata
5. **Write your content** following our style guidelines
6. **Test locally** with `npm start`

### Example: Adding a New Guide

```bash
# Copy the guide template
cp docs/_templates/guide-template.md docs/bedrock-cmmc/user-guide/my-new-guide.md

# Edit the file
# Update frontmatter:
---
sidebar_position: 5
title: My New Feature Guide
description: How to use the new feature
---

# Test locally
npm start
```

## Documentation Structure

```
docs/
├── _templates/                 # Templates for new documentation
│   ├── guide-template.md      # General guide template
│   └── api-template.md        # API documentation template
│
├── bedrock-cmmc/              # Bedrock CMMC Documentation
│   ├── intro.md               # Product introduction
│   ├── getting-started/       # Initial setup guides
│   │   ├── quick-start.md
│   │   └── initial-configuration.md
│   ├── installation/          # Installation guides
│   │   └── installation.md
│   ├── user-guide/            # Feature guides
│   │   └── dashboard-overview.md
│   ├── cmmc-controls/         # CMMC control reference
│   ├── compliance/            # Compliance features
│   ├── api/                   # API documentation
│   └── troubleshooting/       # Common issues & solutions
│
├── bedrock-ag/                # Bedrock AG Documentation
│   └── intro.md               # Product introduction
│                              # (More sections coming soon)
│
└── bedrock-sp/                # Bedrock SP Documentation
    └── intro.md               # Product introduction
                               # (More sections coming soon)
```

## Writing Guidelines

### Document Types

**Guides**: Step-by-step instructions for completing tasks
- Getting started guides
- Feature how-tos
- Configuration guides
- Integration guides

**Reference**: Technical reference information
- API documentation
- Configuration options
- Command reference
- Control/compliance references

**Conceptual**: Explanations of how things work
- Architecture overviews
- Feature explanations
- Best practices
- Design patterns

### Frontmatter

Every document should include frontmatter:

```markdown
---
sidebar_position: 1           # Controls order in sidebar (lower = first)
title: Document Title         # Optional: Override filename
description: Brief summary    # Used for SEO and previews
keywords: [key1, key2]       # Optional: SEO keywords
---
```

### Markdown Features

**Code blocks with syntax highlighting:**
````markdown
```bash
npm start
```

```python
def hello():
    print("Hello")
```
````

**Admonitions:**
```markdown
:::tip
Helpful tips
:::

:::warning
Important warnings
:::

:::danger
Critical information
:::
```

**Tables:**
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data     | More     |
```

**Links:**
```markdown
[Internal link](./other-guide.md)
[External link](https://example.com)
```

**Images:**
```markdown
![Alt text](./images/screenshot.png)
```

## Category Organization

Each product is organized into categories:

### Common Categories

- **getting-started/** - Initial setup and quick start guides
- **installation/** - Detailed installation instructions
- **user-guide/** - Feature guides and how-tos
- **api/** - API reference documentation
- **troubleshooting/** - Common problems and solutions

### Product-Specific Categories

**Bedrock CMMC:**
- **cmmc-controls/** - CMMC practice and control references
- **compliance/** - Compliance features and evidence collection

**Bedrock AG:**
- **ai-features/** - AI and ML capabilities
- **integrations/** - Third-party integrations

**Bedrock SP:**
- **threat-hunting/** - Threat detection and hunting
- **incident-response/** - IR workflows and playbooks

## Sidebar Configuration

Sidebars are automatically generated from your folder structure, but you can customize them by editing:

- `sidebars-bedrock-cmmc.ts`
- `sidebars-bedrock-ag.ts`
- `sidebars-bedrock-sp.ts`

### Auto-Generated Sidebars

The sidebar automatically includes:
- All markdown files in category folders
- Ordered by `sidebar_position` in frontmatter
- Falls back to alphabetical if no position specified

## Best Practices

### Content

✅ **Do:**
- Write clear, concise instructions
- Include code examples
- Add screenshots when helpful
- Link to related documentation
- Test all procedures before documenting
- Keep documentation up-to-date

❌ **Don't:**
- Use jargon without explanation
- Write overly long paragraphs
- Skip prerequisites
- Forget to test your examples
- Leave outdated information

### File Organization

✅ **Do:**
- Use descriptive filenames: `azure-integration.md`
- Keep related content together
- Use images subdirectories: `user-guide/images/`
- Use lowercase with hyphens: `my-guide.md`

❌ **Don't:**
- Use generic names: `guide.md`
- Mix unrelated content in same folder
- Put images in root docs folder
- Use spaces or special characters in filenames

### Style

✅ **Do:**
- Use second person ("you") in guides
- Start steps with action verbs
- Use numbered steps for procedures
- Use bullet points for lists
- Be direct and action-oriented

❌ **Don't:**
- Use first person ("I", "we") excessively
- Write passive voice
- Create overly complex sentences
- Use ambiguous pronouns

## Testing Your Changes

### Local Development

```bash
# Start development server
npm start

# Open browser
http://localhost:3000

# Navigate to your new documentation
# Check formatting, links, and code examples
```

### Build Test

```bash
# Build production version
npm run build

# Test production build
npm run serve

# Check for errors or warnings
```

## Common Tasks

### Adding a New Category

```bash
# Create folder
mkdir docs/bedrock-cmmc/new-category

# Add documents
touch docs/bedrock-cmmc/new-category/first-guide.md
```

The category will automatically appear in the sidebar!

### Adding Images

```bash
# Create images folder
mkdir docs/bedrock-cmmc/user-guide/images

# Add your images
cp screenshot.png docs/bedrock-cmmc/user-guide/images/

# Reference in markdown
![Screenshot](./images/screenshot.png)
```

### Linking Documents

```bash
# Same folder
[Link text](./other-guide.md)

# Parent folder
[Link text](../getting-started/quick-start.md)

# Different category
[Link text](../../bedrock-ag/intro.md)
```

## Resources

### Templates

- `_templates/guide-template.md` - General guide template
- `_templates/api-template.md` - API endpoint template

### Documentation

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Detailed contribution guide
- [Docusaurus Docs](https://docusaurus.io/docs) - Platform documentation
- [Markdown Guide](https://www.markdownguide.org/) - Markdown syntax

### Support

- **Documentation Questions**: Open an issue in repository
- **Product Support**: support@foxxcyber.com
- **General Help**: 1-800-FOXX-CYBER

## Quick Reference

### Creating New Documentation

```bash
# 1. Choose or create category folder
mkdir -p docs/bedrock-cmmc/category-name

# 2. Create your document
cp docs/_templates/guide-template.md \
   docs/bedrock-cmmc/category-name/my-guide.md

# 3. Edit the document
# - Add frontmatter
# - Write content
# - Add code examples
# - Include screenshots

# 4. Test locally
npm start

# 5. Build and verify
npm run build
```

### Frontmatter Template

```yaml
---
sidebar_position: 1
title: My Document Title
description: Brief description for SEO
keywords: [keyword1, keyword2, keyword3]
---
```

### Useful Commands

```bash
npm start              # Start dev server
npm run build          # Production build
npm run serve          # Serve production build
npm run clear          # Clear cache
```

## Getting Help

Need assistance with documentation?

1. **Check this README** for quick answers
2. **Review [CONTRIBUTING.md](../CONTRIBUTING.md)** for detailed guidelines
3. **Look at existing docs** for examples
4. **Contact the team** if still stuck

---

**Happy documenting!** 📚 Your contributions help users succeed with Foxx Cyber products.
