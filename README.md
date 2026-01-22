# Trenkit - Mobile Apps & Games Development

Professional and modern landing page for Trenkit, a company specializing in mobile app and video game development.

## 🎨 Features

- **Next.js 15 with App Router** - Modern React framework with latest features
- **TypeScript** - Static typing for enhanced code safety
- **SCSS Modules** - Encapsulated and maintainable styles
- **Static Site Generation (SSG)** - `next export` for 100% static site
- **Firebase Hosting Ready** - Optimized for Firebase deployment
- **Responsive Design** - Fully adaptive across all devices
- **Smooth Animations** - Subtle transitions and visual effects
- **SEO Optimized** - Page-specific metadata and Open Graph tags
- **Reusable Components** - Button, Card, Section components
- **Professional Legal Documents** - Privacy Policy (13 sections) and Terms of Service (14 sections)
- **Fully English** - Complete English localization with no Spanish text
- **PNG Logo Integration** - High-quality branded logo with shadow effects

## 🎯 Color Palette

```
Primary Cyan:        #00AEE9
Electric Blue:       #3E4BE8
Purple:              #A044FF
Orange Accent:       #FF9A3C
White:               #FFFFFF
```

## 📁 Project Structure

```
trenkit/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── page.module.scss        # Home styles
│   ├── apps/
│   │   ├── page.tsx            # Apps development page
│   │   └── page.module.scss    # Apps styles
│   ├── games/
│   │   ├── page.tsx            # Game development page
│   │   └── page.module.scss    # Games styles
│   ├── privacy/
│   │   ├── page.tsx            # Privacy Policy (13 sections)
│   │   └── page.module.scss    # Privacy styles
│   └── terms/
│       ├── page.tsx            # Terms of Service (14 sections)
│       └── page.module.scss    # Terms styles
├── components/
│   ├── Navbar.tsx              # Fixed navigation bar
│   ├── Navbar.module.scss
│   ├── Footer.tsx              # Footer with links
│   ├── Footer.module.scss
│   ├── Button.tsx              # Reusable button component
│   ├── Button.module.scss
│   ├── Card.tsx                # Reusable card component
│   ├── Card.module.scss
│   ├── Section.tsx             # Reusable section component
│   └── Section.module.scss
├── styles/
│   ├── variables.scss          # SCSS variables and mixins
│   └── globals.scss            # Global styles
├── public/
│   ├── favicon.svg             # Favicon
│   ├── icon.svg                # App icon
│   ├── logo-trenkit.svg        # SVG logo
│   └── trenkit_logo.png        # PNG logo with transparent background
├── package.json
├── tsconfig.json
├── next.config.mjs
├── firebase.json               # Firebase configuration
├── eslint.config.mjs           # ESLint configuration
└── README.md                   # This file
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Firebase CLI (for deployment)

### 1. Clone or Download the Project

```bash
cd trenkit
```

### 2. Install Dependencies

```bash
npm install
```

## 📝 Development

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site in development mode.

The page auto-updates when you edit files.

## 🏗️ Production Build

### Generate Static Site

```bash
npm run build
```

This generates optimized files in the `out/` folder ready for deployment:
- 9 static pages (home, apps, games, privacy, terms, 404, and system pages)
- ~111 KB First Load JS per route
- ~102 KB shared JavaScript chunks

## 🔥 Firebase Hosting Deployment

### Prerequisites

```bash
npm install -g firebase-tools
firebase login
```

### Deployment Steps

1. **Build the project**

```bash
npm run build
```

2. **Deploy to Firebase**

```bash
firebase deploy
```

The site will be deployed to Firebase Hosting and accessible at your Firebase URL.

### Firebase Configuration

Project uses `firebase.json` with:
- Public directory: `out/`
- Clean URLs enabled (no `.html` extensions)
- Trailing slashes disabled

## 📋 Pages & Routes

| Route | Description | Sections |
|-------|-------------|----------|
| `/` | Home / Landing Page | Hero, Apps, Games, About |
| `/apps` | App Development Services | React Native, React Web, Vue.js, Web Tech |
| `/games` | Game Development Services | Unity Games, Casual Games, 2D/3D Development |
| `/privacy` | Privacy Policy | 13 comprehensive sections covering data protection |
| `/terms` | Terms of Service | 14 sections covering usage, liability, disputes |
| `/404` | Not Found Page | Auto-generated for invalid routes |

## 📄 Legal Documents

### Privacy Policy (`/privacy`)

13 comprehensive sections including:
1. Contact information
2. Information collection (direct, automatic, third-party)
3. Why we collect information
4. Who can see your information
5. Data security measures
6. Data retention policies
7. Children's privacy protection
8. Cookies and tracking technologies
9. International data transfers
10. Your rights and choices
11. Third-party links
12. Policy changes
13. Last updated date

### Terms of Service (`/terms`)

14 professional sections including:
1. Agreement to terms
2. Use of service (license, account, prohibited activities, termination)
3. Ownership and intellectual property
4. Virtual items and purchases
5. User content and moderation
6. Disclaimers and warranties
7. Limitation of liability
8. Indemnification
9. Dispute resolution (informal, arbitration, governing law)
10. Modifications to terms
11. Severability
12. Entire agreement
13. Contact information
14. Effective date

## 🎨 Customization

### Changing Global Colors

Edit `styles/variables.scss`:

```scss
$color-blue-primary: #00AEE9;      // Cyan primary
$color-blue-dark: #3E4BE8;         // Electric blue
$color-purple-primary: #A044FF;    // Purple accent
$color-orange-primary: #FF9A3C;    // Orange accent
```

### Modifying Typography

In `styles/globals.scss`:

```scss
$font-family-primary: "Inter", sans-serif;
$font-size-base: 16px;
$font-weight-normal: 400;
$font-weight-bold: 700;
```

### Updating Logo

1. Replace `public/trenkit_logo.png` with your logo (PNG with transparent background)
2. Logo styling is in `app/page.module.scss` (.logoContainer)
3. Logo display height is 400px × 400px

## 📱 Responsive Breakpoints

- **Mobile**: up to 640px
- **Tablet**: up to 768px
- **Desktop**: from 1024px
- **Large Desktop**: from 1280px

## 🔍 SEO & Performance

### Each page includes:
- Custom title and description metadata
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data ready

### Performance Metrics:
- Static pages with minimal JavaScript
- ~111 KB First Load JS per route
- ~102 KB shared chunks (optimized)
- Fast Time to First Byte (TTFB)

## 🐛 Common Issues & Fixes

### Routes Not Working

If routes like `/privacy` or `/terms` don't work:

1. Verify the folder structure in `app/` directory
2. Ensure `page.tsx` exists in each route folder
3. Clear browser cache: `Ctrl+Shift+Delete` or `Cmd+Shift+Delete`
4. Rebuild with `npm run build`

### Build Errors

If build fails:

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Footer Links Incorrect

Edit `components/Footer.tsx` and update the `href` attributes:
- Change `/privacidad` to `/privacy`
- Change `/terminos` to `/terms`
- Update link text from Spanish to English

## 📚 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Deployment**: Firebase Hosting
- **Version Control**: Git
- **Package Manager**: npm

## 🎯 Future Enhancements

1. ✅ English localization (Complete)
2. ✅ Professional privacy policy (Complete)
3. ✅ Professional terms of service (Complete)
4. ✅ PNG logo integration (Complete)
5. ⚠️ Sass deprecation warnings (Optional: convert @import to @use/@forward)
6. 💡 Contact form integration
7. 💡 Blog/Case studies section
8. 💡 Multi-language support (Spanish/English switcher)
9. 💡 Google Analytics integration
10. 💡 Custom domain setup

## 📞 Contact & Support

- **Email**: contact@trenkit.com
- **Website**: https://trenkit.com
- **GitHub**: Repository tracking and version control

## 📝 License

Trenkit Landing Page - All rights reserved © 2026 Trenkit

---

**Built with Next.js, TypeScript, and SCSS. Deployed on Firebase Hosting.**

**Last Updated**: January 22, 2026
