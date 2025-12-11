# Technomay - R&D & Innovation Company Website

The corporate website of Technomay. A modern, multilingual, and responsive design developed using cutting-edge technologies.

## 🌟 Features

- **Next.js 16** - Modern React-based web framework
- **TypeScript** - For type safety
- **Tailwind CSS** - Fast and elegant UI development
- **next-intl** - Complete multilingual support in 4 languages (TR, EN, DE, AR)
- **Framer Motion** - Smooth animations and transitions
- **Dark Mode** - Dark/Light theme support
- **Responsive Design** - Compatible with all devices
- **SEO Optimized** - Optimized for search engines

## 📚 Supported Languages

- 🇹🇷 Turkish (TR)
- 🇬🇧 English (EN)
- 🇩🇪 German (DE)
- 🇸🇦 Arabic (AR)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (v20 recommended)
- npm or yarn

### Installation

```bash
# Clone the project
git clone <repository-url>
cd technomay

# Install dependencies
npm install
# or
yarn install
```

### Start Development Server

```bash
npm run dev
# or
yarn dev
```

Open in browser: [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
technomay/
├── app/
│   ├── [locale]/              # Language dynamic segment
│   │   ├── layout.tsx         # Main layout
│   │   ├── page.tsx           # Home page
│   │   └── [page]/            # Pages: about, services, etc.
│   └── not-found.tsx
├── components/                # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Partners.tsx
│   ├── Footer.tsx
│   └── ...
├── messages/                  # Translation files
│   ├── en.json
│   ├── tr.json
│   ├── de.json
│   └── ar.json
├── i18n/
│   └── request.ts            # i18n configuration
├── public/                   # Static files
└── middleware.ts             # Locale middleware
```

## 🎨 Page Structure

### Sections on Homepage

1. **Navbar** - Navigation and language switcher
2. **Hero** - Main heading and CTA buttons (Animated background)
3. **About** - Company information (Vision & Mission)
4. **Features** - Offered services (6 feature cards)
5. **Partners** - Business partners (Marquee animation)
6. **Footer** - Footer information and links

### Sub Pages

- `/about` - Corporate information
- `/services` - Details of offered services (6 services)
- `/career` - Career opportunities
- `/contact` - Contact form (Interactive)
- `/kvkk` - GDPR/KVKK disclosure
- `/privacy` - Privacy policy
- `/terms` - Terms of use

## 🔧 Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.0.8 | Framework |
| React | 19 | UI Library |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | Latest | Animations |
| next-intl | 4.5.8 | Internationalization |
| React Icons | Latest | Icons |

## 📖 How Translations Work

All translations are stored as JSON files in the `/messages` folder. To use them in components:

```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('SectionName');
  
  return <h1>{t('key')}</h1>;
}
```

### Translation File Structure

```json
{
  "SectionName": {
    "key1": "Value 1",
    "key2": "Value 2",
    "nested": {
      "key3": "Value 3"
    }
  }
}
```

### Language Switching

The language automatically changes when:
- User clicks the language switcher in the Navbar
- URL changes (e.g., `/en/about` vs `/tr/hakkimizda`)
- Browser language preference is detected on first visit
- The entire page re-renders with new translations in real-time

The page content updates **instantly** without page reload thanks to Next.js App Router and next-intl integration.

## 🌐 URL Structure

- `/` → Default locale (Turkish)
- `/en` → English
- `/de` → German
- `/ar` → Arabic
- `/tr/hakkimizda` → Turkish About page
- `/en/about` → English About page
- `/de/services` → German Services page
- `/ar/contact` → Arabic Contact page

## 🎯 Commands

### Development

```bash
npm run dev              # Start development server
npm run dev -- --open   # Auto-open in browser
```

### Build

```bash
npm run build            # Create production build
npm run start            # Start build
npm run lint             # ESLint check
```

## 🚀 Deploy to Vercel

### 1. With Vercel CLI

```bash
npm install -g vercel
vercel
```

### 2. With GitHub Push

Connect Vercel to your GitHub and enable automatic deployment.

### 3. Environment Variables

Create `.env.local` file (if needed):

```env
# Add required variables here
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Report Issues

If you find a bug, please report it in the [issues](../../issues) section.

## 📜 License

© 2025 Technomay. All rights reserved.

## 📧 Contact

- **Email:** info@technomay.com
- **Website:** https://technomay.com
- **Address:** Ankara Technology Center, Ankara, Turkey
- **Phone:** +90 (312) XXX XXXX

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team
- [Vercel](https://vercel.com) support
- All open-source projects

---

**Last Updated:** December 2025
**Version:** 1.0.0
