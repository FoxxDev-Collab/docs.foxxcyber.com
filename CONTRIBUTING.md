# Contributing to Foxx Cyber Documentation

Thank you for contributing to our documentation! This guide will help you add and maintain documentation for Foxx Cyber products.

## Quick Start

### Adding a New Guide

1. **Choose the Right Product Folder**
   ```
   docs/
   ├── bedrock-cmmc/    # CMMC compliance documentation
   ├── bedrock-ag/      # Autonomous Governance documentation
   └── bedrock-sp/      # Security Platform documentation
   ```

2. **Choose or Create a Category Folder**
   ```
   docs/bedrock-cmmc/
   ├── getting-started/     # Initial setup guides
   ├── installation/        # Installation guides
   ├── user-guide/          # How-to guides
   ├── cmmc-controls/       # CMMC control references
   ├── compliance/          # Compliance features
   ├── api/                 # API documentation
   └── troubleshooting/     # Problem-solving guides
   ```

3. **Create Your Guide**
   - Copy a template from `docs/_templates/`
   - Name your file with lowercase and hyphens: `my-new-guide.md`
   - Save it in the appropriate category folder

4. **Add Frontmatter**
   ```markdown
   ---
   sidebar_position: 1
   title: My New Guide
   description: What this guide covers
   keywords: [keyword1, keyword2, keyword3]
   ---
   ```

## File Organization

### Naming Conventions

**Files:**
- Use lowercase with hyphens: `quick-start-guide.md`
- Be descriptive: `azure-integration.md` not `azure.md`
- Avoid special characters except hyphens

**Folders:**
- Use lowercase with hyphens: `getting-started/`
- Keep names concise but clear
- Group related content together

### Sidebar Position

Control the order of documents in the sidebar using `sidebar_position`:

```markdown
---
sidebar_position: 1  # Lower numbers appear first
---
```

## Writing Guidelines

### Document Structure

Every guide should include:

1. **Title and Introduction**
   - Clear, descriptive title
   - Brief introduction explaining the purpose
   - Target audience if relevant

2. **Prerequisites** (if applicable)
   - Required knowledge
   - Required tools or access
   - Dependencies

3. **Main Content**
   - Logical step-by-step structure
   - Clear headings and subheadings
   - Code examples with syntax highlighting
   - Screenshots when helpful

4. **Next Steps** (optional)
   - Links to related guides
   - Suggestions for further learning

5. **Support Information**
   - How to get help
   - Links to additional resources

### Markdown Features

#### Basic Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`inline code`

- Bullet list item
- Another item

1. Numbered list
2. Another item

[Link text](https://example.com)
![Image alt text](./images/screenshot.png)
```

#### Code Blocks

Use syntax highlighting:

````markdown
```bash
# Bash commands
sudo systemctl start service
```

```python
# Python code
def hello():
    print("Hello World")
```

```javascript
// JavaScript code
const example = "value";
```

```yaml
# YAML configuration
key: value
nested:
  - item1
```
````

#### Admonitions (Callout Boxes)

```markdown
:::tip
Helpful tips and best practices go here.
:::

:::info
General information and notes.
:::

:::warning
Important warnings and caveats.
:::

:::danger
Critical information about potential data loss or security issues.
:::
```

#### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |
```

#### Links

**Internal links** (to other docs):
```markdown
[Quick Start Guide](./getting-started/quick-start.md)
[Installation](../installation/installation.md)
```

**External links**:
```markdown
[Foxx Cyber](https://foxxcyber.com)
```

### Style Guidelines

**Voice and Tone:**
- Use clear, concise language
- Write in second person ("you") for guides
- Be direct and action-oriented
- Avoid jargon unless necessary (then define it)

**Technical Writing:**
- Use numbered steps for procedures
- One task per step
- Start steps with action verbs
- Include expected outcomes

**Example:**
```markdown
1. **Navigate to Settings**
   Click the gear icon in the top right corner.

2. **Select Integration**
   Choose "Azure AD" from the list of providers.

3. **Enter Credentials**
   Input your Azure tenant ID and client secret.
```

## Adding Images

1. **Create an images folder** in the same directory as your guide:
   ```
   docs/bedrock-cmmc/installation/
   ├── installation.md
   └── images/
       ├── step1-screenshot.png
       └── step2-diagram.png
   ```

2. **Reference images** in your markdown:
   ```markdown
   ![Installation wizard](./images/step1-screenshot.png)
   ```

3. **Image guidelines:**
   - Use PNG for screenshots
   - Use SVG for diagrams (or PNG)
   - Optimize images (keep under 500KB)
   - Use descriptive alt text
   - Include images that add value

## Testing Your Changes

### Local Development

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Open browser:**
   ```
   http://localhost:3000
   ```

3. **Test your changes:**
   - Navigate to your new guide
   - Check formatting
   - Verify links work
   - Test code examples
   - Check on mobile view

### Build Test

Before submitting, test the production build:

```bash
npm run build
npm run serve
```

## Sidebar Configuration

Sidebars are automatically generated from your folder structure. However, you can customize them:

### Auto-Generated Sidebars

The default configuration auto-generates sidebars based on:
- Folder structure
- `sidebar_position` in frontmatter
- File names

### Manual Sidebar Entries

To manually control the sidebar, edit the appropriate file:
- `sidebars-bedrock-cmmc.ts` - Bedrock CMMC
- `sidebars-bedrock-ag.ts` - Bedrock AG
- `sidebars-bedrock-sp.ts` - Bedrock SP

Example:
```typescript
{
  type: 'category',
  label: 'New Category',
  items: [
    'folder/guide-1',
    'folder/guide-2',
  ],
}
```

## Creating New Categories

To add a new category (folder):

1. **Create the folder:**
   ```bash
   mkdir docs/bedrock-cmmc/new-category
   ```

2. **Add an index file** (optional):
   ```bash
   touch docs/bedrock-cmmc/new-category/index.md
   ```

3. **Add content:**
   The category will automatically appear in the sidebar when you add documents to it.

## API Documentation

For API endpoints, use the API template:

```bash
cp docs/_templates/api-template.md docs/bedrock-cmmc/api/my-endpoint.md
```

Include:
- Endpoint URL and method
- Authentication requirements
- Request parameters and body
- Response format and fields
- Error codes
- Code examples (cURL, Python, JavaScript)
- Rate limiting info

## Best Practices

### Content
- **Be comprehensive**: Cover all aspects of the topic
- **Be accurate**: Test procedures before documenting
- **Be current**: Update docs when features change
- **Be consistent**: Follow established patterns

### Organization
- **Group related content**: Keep similar topics together
- **Use descriptive names**: Make filenames and titles clear
- **Maintain hierarchy**: Use proper heading levels (H1 → H2 → H3)
- **Link related content**: Help users discover relevant guides

### Maintenance
- **Review regularly**: Check for outdated information
- **Update versions**: Note which product version docs apply to
- **Track changes**: Use git commit messages effectively
- **Test examples**: Verify code examples still work

## Using Templates

### Available Templates

Located in `docs/_templates/`:

1. **guide-template.md** - General how-to guides
2. **api-template.md** - API endpoint documentation

### Copying a Template

```bash
# Copy guide template
cp docs/_templates/guide-template.md docs/bedrock-cmmc/user-guide/my-new-guide.md

# Copy API template
cp docs/_templates/api-template.md docs/bedrock-cmmc/api/my-endpoint.md
```

### Customizing Templates

Feel free to modify templates as needed, but maintain the general structure.

## Markdown Tips

### Linking to Headers

You can link to specific sections within a document:

```markdown
[Jump to Installation](#installation)
```

### Code Highlighting

Highlight specific lines in code blocks:

````markdown
```javascript {2,5-7}
function example() {
  const important = true;  // This line is highlighted
  const other = false;

  if (important) {         // These lines
    return true;           // are also
  }                        // highlighted
}
```
````

### Tabs

Group related code examples:

````markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="curl" label="cURL" default>
    ```bash
    curl -X GET https://api.example.com
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ```python
    import requests
    requests.get("https://api.example.com")
    ```
  </TabItem>
</Tabs>
````

## Getting Help

### Questions?

- **Documentation Issues**: Open an issue in the repository
- **Product Questions**: support@foxxcyber.com
- **General Help**: See the Docusaurus documentation at https://docusaurus.io

### Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)

## Review Process

1. Create your documentation
2. Test locally (`npm start`)
3. Test production build (`npm run build`)
4. Commit your changes with clear message
5. Submit for review (if applicable)

## Quick Reference

### File Structure
```
docs/
├── _templates/              # Templates for new docs
├── bedrock-cmmc/           # Product documentation
│   ├── intro.md            # Product intro page
│   ├── getting-started/    # Category folder
│   │   ├── quick-start.md
│   │   └── configuration.md
│   └── user-guide/
│       └── images/         # Images for this category
└── bedrock-ag/
```

### Frontmatter Examples

**Minimal:**
```yaml
---
sidebar_position: 1
---
```

**Complete:**
```yaml
---
sidebar_position: 1
title: Custom Title
description: SEO description
keywords: [keyword1, keyword2]
---
```

### Quick Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Serve production build
npm run serve

# Check for broken links
npm run build -- --out-dir build_test

# Clear cache
npm run clear
```

---

**Happy Documenting!** 📚

If you have questions or suggestions for improving this guide, please reach out to the documentation team.
