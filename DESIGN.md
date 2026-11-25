---
name: ELIKIA
colors:
  surface: '#fff9ed'
  surface-dim: '#e0d9cb'
  surface-bright: '#fff9ed'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e4'
  surface-container: '#f4edde'
  surface-container-high: '#eee8d9'
  surface-container-highest: '#e8e2d3'
  on-surface: '#1e1c13'
  on-surface-variant: '#574237'
  inverse-surface: '#333027'
  inverse-on-surface: '#f7f0e1'
  outline: '#8a7265'
  outline-variant: '#dec1b2'
  surface-tint: '#9a4600'
  primary: '#9a4600'
  on-primary: '#ffffff'
  primary-container: '#e87524'
  on-primary-container: '#4f2000'
  inverse-primary: '#ffb68d'
  secondary: '#1e6b3f'
  on-secondary: '#ffffff'
  secondary-container: '#a6f4bc'
  on-secondary-container: '#257245'
  tertiary: '#765b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#d0a62b'
  on-tertiary-container: '#503d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68d'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#763300'
  secondary-fixed: '#a6f4bc'
  secondary-fixed-dim: '#8bd7a1'
  on-secondary-fixed: '#00210e'
  on-secondary-fixed-variant: '#00522b'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#edc146'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#fff9ed'
  on-background: '#1e1c13'
  surface-variant: '#e8e2d3'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  price-hero:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  price-card:
    fontFamily: DM Sans
    fontSize: 19px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the vibrancy, culinary heritage, and fertile abundance of Congo-Brazzaville's agro-alimentary landscape. It balances visceral warmth with commercial efficiency: earthy grounding meets modern, high-conversion e-commerce agility. The design aesthetic fuses tactile organic minimalism with contemporary retail ergonomics. 

The emotional signature is inviting, sunny, dependable, and appetizing. Interfaces feel crisp and trustworthy—instilling deep confidence in provenance, logistics, freshness, and pricing transparency (FCFA). Micro-textures remain clean: soft warm-toned backdrops eliminate glare in high-ambient-light environments, while crisp white elevated containers elevate product photography of spices, botanicals, and farm staples.

## Colors

The color architecture is built around harvest vitality and culinary authenticity:

- **Primary (`#E87524`):** Solar Orange. Drives primary interactions, checkout accelerators, dynamic totals, and urgent sales cues. Must maintain high legibility against white and cream backgrounds.
- **Secondary (`#287447`):** Deep Forest & Agricultural Green. Denotes biological purity, forest harvests, organic traceability, and "En stock" verification.
- **Accent / Sunshine (`#F5C84C`):** Golden Yellow. Reserved for customer ratings, promotional burst tags, and discovery highlights.
- **Surface Canvas (`#FFF8E9`):** Natural Soft Cream. Forms the base page canvas to soften optical fatigue and reinforce organic warmth.
- **Surface Container (`#FFFFFF`):** Pure White. Dedicated to product cards, modal sheets, and operational drawers, delimited by structural sand-tinted borders (`#EADCC8` and `#E5D5BC`).
- **Typography & Dark Contrast:** Primary copy uses deep charcoal (`#231F20`) exceeding WCAG AAA on light canvases; secondary supporting text uses warm cocoa-umber (`#4A4036`).
- **Functional Status Tokens:**
  - *En stock:* Text `#287447`, surface fill `#E2F3E7`, border `#C6E7D0`.
  - *Disponible sur commande:* Text `#D97706`, surface fill `#FEF3C7`, border `#FDE68A`.
  - *Indisponible:* Text `#6B7280`, surface fill `#F3F4F6`, border `#E5E7EB`.

## Typography

The type scale pairs **Plus Jakarta Sans** for brand headings with **DM Sans** for transactional copy, technical weights, packaging dimensions, and currency.

- **Plus Jakarta Sans:** Selected for its geometric structure, warm curves, and modern West-Central African retail appeal. Display and headline levels project vitality and welcoming confidence.
- **DM Sans:** Prioritized for high-density clarity. Figures, decimals, unit metrics (g, kg, sachets, flacons), and currency denominations (`FCFA`) stay tabular and clear across mobile screens.
- **Currency & Metric Formatting:** Always set currency as `12.500 FCFA` with a non-breaking space and medium-to-bold figure weight. Dynamic weight calculations (e.g., `350g = 1.750 FCFA`) utilize `price-card` styling with `body-sm` auxiliary tags.

## Layout & Spacing

The layout is grounded on an adaptive 8pt spacing grid within a responsive fluid container:

- **Breakpoints & Grids:**
  - *Mobile (<640px):* 4-column layout, `1rem` margins, `1rem` gutters. Product listings display in 2-column compact cards.
  - *Tablet (640px - 1024px):* 8-column layout, `2rem` margins, `1.25rem` gutters.
  - *Desktop (>1024px):* 12-column layout max-width `1280px`, centered, `3rem` outer canvas padding, `1.5rem` gutters.
- **E-Commerce Density:** Vertical vertical rhythm inside commercial catalogs alternates between tight functional groups (`space-xs` and `space-sm` for weight tags and price blocks) and spacious categorical divisions (`space-lg` to `space-xl` between sections like 'Épices & Racines' and 'Thés & Infusions').

## Elevation & Depth

Visual hierarchy uses warm, low-diffusion ambient shadows paired with soft earthy boundary lines, avoiding cold corporate grays:

- **Level 0 (Flat Canvas):** `#FFF8E9` natural background with no elevation.
- **Level 1 (Card & Module Resting):** Pure white `#FFFFFF` surface bounded by a 1px solid `#EADCC8` border, supported by an ambient shadow: `0 2px 8px -2px rgba(74, 64, 54, 0.06), 0 1px 3px 0 rgba(74, 64, 54, 0.04)`.
- **Level 2 (Interactive Hover & Active Drawers):** 1px solid `#E5D5BC` border, elevation shadow: `0 8px 20px -4px rgba(74, 64, 54, 0.10), 0 4px 8px -2px rgba(74, 64, 54, 0.05)`.
- **Level 3 (Modals & Sticky Cart Summary):** Elevation shadow: `0 16px 36px -6px rgba(35, 31, 32, 0.16)`.
- **Glass / Floating Headers:** Frosted natural surface using `background: rgba(255, 248, 233, 0.88)` with `backdrop-filter: blur(8px)` and bottom border `1px solid rgba(234, 220, 200, 0.6)`.

## Shapes

The design uses a balanced roundedness (`roundedness: 2` — default 8px / 0.5rem radius) to strike a professional yet organic tone. Exaggerated capsule or pill shapes are avoided to keep cards and data containers structured:

- **Micro elements (Badges, tags, form inputs):** `rounded-md` (6px to 8px).
- **Cards, Buttons, and Modal dialogs:** `rounded-lg` (8px to 12px) for an ergonomic, tactile feel.
- **Featured hero banners and Category spotlights:** `rounded-xl` (16px to 24px).
- **Quantities & Steppers:** Continuous unified rounding with segmented internal dividers.

## Components

### 1. Buttons
- **Primary CTA ("Ajouter au panier", "Commander"):** Solid vibrant orange (`#E87524`), text `#FFFFFF` (`font-weight: 700`), radius `10px`, tactile bottom inset border (`box-shadow: inset 0 -2px 0 rgba(0,0,0,0.15)`), active scale feedback (`scale: 0.98`).
- **Secondary Action ("Voir détails", "Continuer mes achats"):** Natural white canvas, border `1.5px solid #287447`, text `#287447`, hover background `#E2F3E7`.
- **Weight / Packaging Switcher Segment:** Grouped multi-segment button with `#EADCC8` frame; active choice receives `#287447` fill with white text.

### 2. Product Cards (Card Vente Forfait & Poids Dynamique)
- **Container:** Pure `#FFFFFF` background, `1px solid #EADCC8`, `rounded-lg` (12px), subtle hover lift.
- **Product Visual:** 1:1 ratio square with subtle sand background fill (`#F9F4EB`), clipped corner badges for stock status.
- **Unit Selector Matrix:**
  - *Vente au forfait:* Dropdown or radio chips for fixed packaging (`Sachet 100g`, `Bocal 250g`).
  - *Vente au poids dynamique:* Stepper input (`- 250g +` or discrete steps `100g | 250g | 500g | 1kg`) dynamically recalculating and rendering the live price in `FCFA` in bold `price-card` typography.

### 3. Inventory & Logistics Badges
- **Status Tags:** Compact text `label-sm`, uppercase, horizontal padding `8px`, vertical padding `4px`, radius `6px`.
  - *En stock:* Text `#287447`, background `#E2F3E7`.
  - *Disponible sur commande:* Text `#D97706`, background `#FEF3C7`.
  - *Indisponible:* Text `#6B7280`, background `#F3F4F6`.
- **Logistics Indicators:** Distinct dual-option delivery markers placed on cards or basket summary:
  - *Livraison locale express:* Vehicle icon, neutral container with green badge outline.
  - *Expédition agence interurbaine:* Route/cargo icon, warm border with amber badge outline.

### 4. Input Fields & Selectors
- **Fields:** Background `#FFFFFF`, border `1px solid #EADCC8`, placeholder text `#4A4036` (50% opacity), radius `8px`. Focused state: border `2px solid #E87524`, no harsh blue glow.
- **Quantity Adjuster:** High-touch steppers (`- / +`) with minimum hit targets of 44x44px for reliable thumb operation on mobile devices.

### 5. Category Navigation & Quick Filters
- **Pills:** Bordered chip design (`1px solid #EADCC8`), background `#FFF8E9`, text `#231F20`. Active state changes to background `#287447`, text `#FFFFFF`, border color `#287447`.