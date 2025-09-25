# Copilot Instructions for ACM TAMUSA Website

## Project Overview
This is an **Eleventy (11ty) static site generator** project for the ACM Texas A&M University San Antonio chapter website. The site uses Nunjucks templating, vanilla CSS/JS, and is deployed via GitHub Pages.

## Architecture & Build System

### Core Structure
- **Source**: `src/` directory contains all source files
- **Output**: `_site/` directory (generated, git-ignored)
- **Config**: `.eleventy.js` - main Eleventy configuration
- **Templates**: Nunjucks (`.njk`) files in `src/` and `src/_includes/`
- **Data**: JSON files in `src/_data/` for dynamic content

### Key Commands
```bash
# Development server with hot reload
npx @11ty/eleventy --serve

# Production build
npx @11ty/eleventy

# Clean build (remove _site first)
rm -rf _site && npx @11ty/eleventy
```

### Content Management
- **Team data**: Edit `src/_data/team.json` for team member information
- **Events**: Modify `src/_data/event.json` for calendar events
- **Images**: Place in `src/img/` - automatically copied to `_site/img/`
- **Styles**: Component-based CSS files in `src/css/`

## Development Patterns

### Template Structure
- **Base layout**: `src/_includes/base.njk` - main HTML structure
- **Page templates**: `src/index.njk`, `src/team.njk` - top-level pages
- **Components**: `src/_includes/` contains reusable template partials
- **Data binding**: Use `{{ variable }}` for output, `{% %}` for logic

### CSS Organization
```
src/css/
├── main.css          # Global styles and variables
├── nav.css           # Navigation component
├── hero.css          # Hero section styling
├── team.css          # Team page specific
├── calendar.overrides.css  # Calendar widget customization
└── [component].css   # Other component styles
```

### Asset Handling
- Static assets in `src/img/`, `src/js/`, `src/css/` are automatically copied
- WebP images preferred for performance
- Admin panel configured via `src/admin/config.yml` (Netlify CMS)

## Deployment & Workflows

### GitHub Actions
- **Build & Deploy**: `.github/workflows/deploy.yml` - builds and deploys to GitHub Pages
- **Pages**: `.github/workflows/pages.yml` - GitHub Pages configuration
- Triggered on pushes to main branch

### File Conventions
- Use kebab-case for CSS classes: `.team-member`, `.hero-section`
- Component CSS should match template names
- Image files should be descriptive: `team/president.webp`

## Common Development Tasks

### Adding New Pages
1. Create `.njk` file in `src/`
2. Use front matter to set layout: `layout: base.njk`
3. Add navigation links in `src/_includes/navbar.njk`

### Updating Team Members
1. Edit `src/_data/team.json`
2. Add corresponding images to `src/img/team/`
3. Follow existing JSON structure for consistency

### Styling Components
1. Create component-specific CSS file in `src/css/`
2. Import/link in base template or specific pages
3. Use CSS custom properties for theming consistency

### Calendar Integration
- Uses `vanilla-calendar-pro` package
- Customizations in `calendar.overrides.css`
- Event data pulled from `src/_data/event.json`

## External Dependencies
- **Eleventy**: Static site generator
- **Vanilla Calendar Pro**: Event calendar widget
- **Netlify CMS**: Content management (admin panel)
- All dependencies managed via npm, see `package.json`

## Important Notes
- Site builds to `_site/` directory - never edit files there directly
- GitHub Pages serves from `_site/` after Actions build
- Local development server runs on `http://localhost:8080`
- Changes to data files or templates trigger automatic rebuilds during development