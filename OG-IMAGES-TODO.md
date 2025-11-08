# Open Graph Images - Creation Guide

## Required OG Images

You need to create the following Open Graph images for social media sharing. These images appear when your pages are shared on Facebook, Twitter, LinkedIn, etc.

### Image Specifications
- **Size**: 1200 x 630 pixels (required)
- **Format**: PNG or JPG
- **File size**: Keep under 1MB for fast loading
- **Safe zone**: Keep important text/logos within 1200 x 600px (avoid top/bottom 15px)

### Required Images List

1. **`/public/og-image.png`** - Default/Homepage image
   - Use: Homepage, About, Pricing, Contact, Careers, Partner, Apply Now, Comparison
   - Should showcase: Lattice branding + "All-in-One Platform for Contractors"
   - Include: Logo, tagline, key visual

2. **`/public/og-crm.png`** - CRM Service
   - Focus: CRM dashboard mockup or lead management visual
   - Text: "LatticeAI CRM | Smart Lead Management for Contractors"

3. **`/public/og-3d-rendering.png`** - 3D Rendering Service
   - Focus: Before/after 3D rendered room or impressive visualization
   - Text: "3D Rendering Services for Contractors | Lattice"

4. **`/public/og-ai-designer.png`** - AI Designer Service
   - Focus: AI-generated room design variations side-by-side
   - Text: "AI Designer | Instant Room Redesign Tool | Lattice"

5. **`/public/og-digital-showroom.png`** - Digital Showroom Service
   - Focus: Portfolio/gallery mockup or project showcase
   - Text: "Digital Showroom | Interactive Portfolio for Contractors | Lattice"

6. **`/public/og-web-design.png`** - Web Design & SEO Service
   - Focus: Modern contractor website mockup on multiple devices
   - Text: "Free SEO Website for Contractors | Lattice"

7. **`/public/og-remote-employees.png`** - Remote Employees Service
   - Focus: Remote team collaboration or professional staff
   - Text: "Remote Employees for Contractors | Lattice"

## Design Tips

### Brand Consistency
- Use Lattice brand colors (green #166534 as primary)
- Include the Lattice logo in the top-left or top-center
- Use the Figtree font (your site font) for text
- Maintain consistent layout across all images

### Visual Hierarchy
1. **Logo** (top-left, ~120x40px)
2. **Main headline** (large, bold, center or left-aligned)
3. **Supporting visual** (mockup, screenshot, or illustration)
4. **Small tagline/CTA** (optional, bottom)

### Tools You Can Use
- **Canva** (easiest, has OG image templates)
- **Figma** (professional, free tier available)
- **Photoshop** (if you have it)
- **Online OG generators**:
  - https://www.opengraph.xyz/
  - https://ogimageplayground.vercel.app/

## Quick Canva Template Approach

1. Go to Canva.com
2. Create custom size: 1200 x 630px
3. Add your Lattice logo
4. Add headline with service name
5. Add relevant background image or illustration
6. Add subtle gradient overlay for text readability
7. Export as PNG

## Testing Your OG Images

After creating images, test them:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Priority Order

If you need to create these in phases:

### Phase 1 (Critical - Do First):
1. `/public/og-image.png` - Used for most pages
2. `/public/og-crm.png` - Your main service
3. `/public/og-web-design.png` - Free offer, high conversion

### Phase 2 (Important):
4. `/public/og-3d-rendering.png`
5. `/public/og-ai-designer.png`
6. `/public/og-digital-showroom.png`

### Phase 3 (Nice to have):
7. `/public/og-remote-employees.png`

## Current Status

All metadata is configured to use these images. Once you create and place them in the `/public` folder, they will automatically work.

**Note**: Until you create these images, the OG tags will reference non-existent files. Social media platforms will either show nothing or use their default placeholder.
