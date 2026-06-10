# Huntington Park Spider Control - Design & Content Standards

This file contains the strict guidelines, coding practices, and content standards for developing, designing, and maintaining the Spider Control Huntington Park website. All current and future changes must comply fully with these rules.

---

## 📋 Technology Stack

- **Structure**: Vanilla HTML5 (semantic elements)
- **Styling**: Tailwind CSS v3 via CDN play script (no external `style.css` file)
- **Logic**: Vanilla JavaScript (single `js/main.js` file, no JS frameworks)
- **No Build Tools**: No bundlers, preprocessors, or compilers

---

## 🎨 Color Palette (Solid Colors Only)

Use the Navy Blue + White + Orange scheme.

| CSS / Tailwind Variable | Hex Code | Usage |
|---|---|---|
| `navy` | `#1A2E44` | Primary Navy blue — hero bg, headings, footer, dark sections |
| `navy-light` | `#243B55` | Lighter navy — hover states, lighter bg sections |
| `navy-dark` | `#0F1D2F` | Deepest navy — footer background |
| `orange` | `#E8600A` | Secondary Orange — CTA buttons, accents, highlights, phone links |
| `orange-dark` | `#C74F00` | Darker orange — CTA hover states |
| `green-accent` | `#2E7D32` | Green accents — checkmarks, eco badges, trust indicators |
| `bg-white` | `#FFFFFF` | Main page background |
| `bg-light` | `#F7F9FC` | Light section backgrounds (for visual alternating) |
| `bg-alt` | `#EDF2F7` | Alternate section bg, icon backgrounds, badges |
| `text-dark` | `#1A2E44` | Primary headings and dark text |
| `text-body` | `#4A5568` | Body paragraph text |
| `text-muted` | `#718096` | Secondary/muted text |
| `border` | `#E2E8F0` | Borders, dividers, card outlines |

### Rule 1: Never Use Gradient Colors
* **Strict Guideline**: Under no circumstances should gradient colors (`linear-gradient`, `radial-gradient`) be used anywhere on the website.
* **Layout Rule**: All backgrounds, cards, buttons, borders, and visual elements must use **solid colors** from the palette above.

### Rule 2: No Ad-Hoc Colors
* Always configure Tailwind theme config to include these colors and refer to them standardly.

---

## 🔤 Typography

- **Headings**: `Roboto Slab` (serif), 700 weight
- **Body**: `Inter` (sans-serif), 400/500/600 weights
- Load via `<link>` with `display=swap`
- Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com` in the `<head>`.

### Rule 3: Heading Hierarchy
- Every page must have exactly **one H1** tag.
- Headings must follow strict hierarchy: H1, H2, H3. No skipped levels.
- No emojis in headings. Text-only.

---

## 🖼️ Image Standards

### Rule 4: Image Format
- **Strictly WebP format** for all content images. Do not use PNG, JPG, or SVG for photos.
- SVG is preferred for UI/utility icons (inline SVGs).
- Always specify `width` and `height` attributes to prevent CLS.
- Below-fold images must use `loading="lazy"`.

---

## 📐 Layout & Component Rules

### Rule 5: No Forms of Any Kind
- **Strict Guideline**: This is a rank-and-rent site. **No forms of any type** should exist anywhere on the website — no contact forms, quote request forms, newsletter signup forms, search forms, or any `<form>` element.
- **CTA Strategy**: All calls-to-action must use click-to-call phone links (`tel:5555555555`) instead of forms.

### Rule 6: Minimal Buttons
- Do not overuse buttons. Maximum 1-2 CTA buttons per visible section.
- All CTA buttons must link to `tel:5555555555` (click-to-call).

### Rule 7: FAQ Sections Must Be Interactive Accordions
- FAQ sections must be styled as click-to-expand/collapse accordions.
- Answers hidden by default, revealed on click with smooth CSS transitions.
- Vanilla JS only (no JS frameworks).

### Rule 8: Internal Linking
- Each page must have 2-3 natural internal links to other pages on the site (e.g. services, about, areas, etc.).
- Links must use descriptive, natural anchor text.

### Rule 9: Navbar
- Sticky white navbar on all pages (with shadow on scroll).
- Mobile hamburger menu for screens under 768px.
- Active page must be visually highlighted in the nav.

### Rule 10: No Customer Reviews or Testimonials
- **Strict Guideline**: Under no circumstances should there be any customer reviews, testimonials, ratings, star rating badges, or review profiles anywhere on the website.

### Rule 11: No Badges or Pills
- **Strict Guideline**: Do not use status badges, outline/solid pills, colored background labels, or status indicator tags in bordered/filled containers (such as "ACTIVE DISPATCH" or custom green/orange pill shapes) anywhere on the website. Pulse indicators and text must be styled inline, using standard color and font choices, without being wrapped in badge backgrounds or block borders.

---

## 🔍 On-Page SEO Standards

### Rule 12: Meta Tags (Per Page)
- Unique `<title>` tag with primary keyword + location + phone.
- Unique `<meta name="description">` (150-160 characters) with a clear CTA.
- Canonical URL tag on every page.
- Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`) on every page.

### Rule 13: Structured Data / Schema Markup
- `LocalBusiness` JSON-LD schema on every page.
- `FAQPage` schema on pages containing FAQs.
- `BreadcrumbList` schema on all inner pages.

---

## ⚡ Core Web Vitals Standards

### Rule 14: Performance Requirements
- Tailwind CSS v3 loaded via CDN.
- No external JS libraries — vanilla JS only.
- All scripts must use `defer` attribute.
- Preconnect to Google Fonts.

### Rule 15: Global Components (Header, Footer, Top Bar)
- **Shared Templates**: The Top Notification Bar, Header Navigation, and Footer markup must be stored in the shared script file [js/components.js](file:///d:/spider%20control%20huntington%20park/js/components.js) as ES6 backtick string properties of `window.globalComponents`.
- **Synchronous Injection**: To ensure components render instantly on the very first screen paint with no layout shift or visual delay, they must be injected synchronously during page parsing. Each page contains a script tag directly following the footer placeholder:
  \`\`\`html
  <script>
    document.getElementById('global-top-bar').innerHTML = window.globalComponents.topBar;
    document.getElementById('global-header').innerHTML = window.globalComponents.header;
    document.getElementById('global-footer').innerHTML = window.globalComponents.footer;
  </script>
  \`\`\`
- **Script Ordering**: [js/components.js](file:///d:/spider%20control%20huntington%20park/js/components.js) must be loaded synchronously in the `<head>` of all HTML documents (without `defer` or `async`) so the component template variables are compiled and ready before body parsing begins.
- **Immediate Event Binds**: The main interactive script [js/main.js](file:///d:/spider%20control%20huntington%20park/js/main.js) is loaded with `defer` and binds navigation toggle/scrolling event listeners directly on `DOMContentLoaded`, as the components are guaranteed to be present in the DOM by that time.


