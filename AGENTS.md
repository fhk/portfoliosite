# AGENTS.md

## Project Overview
Svelte portfolio for B2B analytics platform featuring Arrow, HyperlocalAI, and PrismAI with p5.js 3D visualizations. Built following Pentagram's dual-axis navigation pattern and Palantir's interactive demo philosophy.

## Setup Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Tech Stack
- **Framework**: SvelteKit with TypeScript
- **UI Library**: Skeleton UI (Tailwind-based)
- **Styling**: Tailwind CSS with custom color tokens
- **3D Graphics**: p5-svelte with WebGL support
- **SSR**: Disabled for visualization routes (`/products/*`)

## Project Structure
```
src/
├── lib/
│   ├── components/
│   │   └── Logo3D.svelte          # 3D animated logo component
│   └── webgl-utils.ts             # WebGL detection and utilities
├── routes/
│   ├── +layout.svelte             # Main app layout
│   ├── +page.svelte               # Homepage with dual-axis navigation
│   └── products/
│       ├── +layout.js             # Disables SSR for WebGL content
│       ├── arrow/+page.svelte     # Network optimization product
│       ├── hyperlocal/+page.svelte # Customer intelligence product
│       └── prism/+page.svelte     # Value maximization product
└── app.css                        # Global styles with color tokens
```

## Color System
Product-differentiated color tokens for brand consistency:
- **Arrow (Network Optimization)**: Blue (`arrow-blue-*`)
- **HyperlocalAI (Customer Intelligence)**: Green (`hyperlocal-green-*`)
- **PrismAI (Value Maximization)**: Purple (`prism-purple-*`)

## Code Style
- TypeScript strict mode enabled
- Skeleton UI components preferred over custom components
- Tailwind classes for styling
- p5-svelte in instance mode only (never global)
- Semantic HTML with proper accessibility attributes

## Do's
✅ Use p5-svelte in instance mode for all 3D visualizations
✅ Disable SSR for WebGL routes via `+layout.js`
✅ Implement `prefers-reduced-motion` support
✅ Provide static fallbacks for browsers without WebGL
✅ Use product-specific color tokens for differentiation
✅ Follow dual-axis navigation pattern for portfolio organization
✅ Include trust indicators (client logos, metrics, compliance badges)
✅ Optimize performance with `pixelDensity(1)` and `buildGeometry()`

## Don'ts
❌ No global p5 mode (Svelte incompatible)
❌ No Mantine components (React-only library)
❌ No animations >5 seconds without pause controls
❌ No flashing content exceeding 3 times per second
❌ No motion covering more than one-third of screen
❌ Don't create new files unnecessarily - prefer editing existing ones

## Performance Guidelines
- Target 30-60 FPS for 3D animations
- Keep geometry under 10,000 triangles for mobile compatibility
- Use `buildGeometry()` for static 3D shapes
- Reduce pixel density on high-DPI displays
- Implement WebGL detection with graceful fallbacks

## Accessibility Requirements
- Implement `prefers-reduced-motion` media query
- Provide static image fallbacks for non-WebGL browsers
- Ensure animations can be paused/stopped
- Use proper ARIA labels and semantic HTML
- Support keyboard navigation

## Component Specifications

### Logo3D Component
**File**: `src/lib/components/Logo3D.svelte`

**Props API**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | number | 400 | Canvas width in pixels |
| height | number | 300 | Canvas height in pixels |
| interactive | boolean | true | Enable mouse interaction |
| showFallback | boolean | false | Force static fallback display |

**States**:
- Default: Auto-rotating 3D "A" letter
- Hover: Mouse-influenced rotation
- Reduced Motion: Static or minimal animation
- WebGL Unavailable: 2D gradient fallback

**Accessibility**:
- Respects `prefers-reduced-motion`
- Provides WebGL detection and fallback
- Keyboard accessible when interactive

### WebGL Utilities
**File**: `src/lib/webgl-utils.ts`

**Functions**:
- `detectWebGL()`: Returns boolean for WebGL support
- `supportsWebGL2()`: Returns boolean for WebGL2 support
- `checkReducedMotion()`: Returns boolean for motion preferences
- `getOptimalPixelDensity()`: Returns optimized pixel density

## User Stories

### Homepage Navigation
```gherkin
Scenario: User explores portfolio via dual-axis navigation
  Given a user visits the homepage
  When they select both industry and work type
  Then they should navigate to the relevant product page
  And see product-specific branding and content
```

### 3D Logo Interaction
```gherkin
Scenario: User interacts with 3D visualization
  Given a user is on any page with Logo3D
  When the 3D logo loads
  Then it should animate smoothly at 30+ FPS
  And respond to mouse hover with subtle rotation
  And provide static fallback if WebGL unavailable
  And respect reduced motion preferences
```

### Product Differentiation
```gherkin
Scenario: User navigates between products
  Given a user visits different product pages
  When they view Arrow, HyperlocalAI, or PrismAI
  Then each should display unique color schemes
  And show relevant metrics and features
  And maintain consistent navigation structure
```

## Development Notes
- Built following SPEC.md requirements for B2B analytics portfolio
- Implements Pentagram's dual-axis navigation philosophy
- Uses Collins' transformation narrative approach for product positioning
- Includes Palantir-inspired trust indicators and metrics
- Follows accessibility best practices from day one
- Optimized for both desktop and mobile viewing

## Deployment
- Static site generation compatible
- CDN-friendly asset optimization
- WebGL graceful degradation ensures universal compatibility
- Progressive enhancement approach for 3D features