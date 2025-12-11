# Technomay - R&D & Innovation Company Website

Technomay'ın kurumsal web sitesidir. Modern teknolojiler kullanılarak geliştirilmiş, çok dilli ve duyarlı bir tasarım ile hizmet vermektedir.

## 🌟 Özellikler

- **Next.js 16** - React tabanlı modern web framework
- **TypeScript** - Tip güvenliği için
- **Tailwind CSS** - Hızlı ve estetik UI geliştirme
- **next-intl** - 4 dilde (TR, EN, DE, AR) tam çok dil desteği
- **Framer Motion** - Pürüzsüz animasyonlar ve geçişler
- **Dark Mode** - Karanlık/Açık tema desteği
- **Responsive Design** - Tüm cihazlarda uyumlu
- **SEO Optimized** - Arama motorları için optimize edilmiş

## 📚 Desteklenen Diller

- 🇹🇷 Türkçe (TR)
- 🇬🇧 İngilizce (EN)
- 🇩🇪 Almanca (DE)
- 🇸🇦 Arapça (AR)

## 🚀 Hızlı Başlangıç

### Ön Gereksinimler

- Node.js 18+ (v20 önerilir)
- npm veya yarn

### Kurulum

```bash
# Proje klonla
git clone <repository-url>
cd technomay

# Bağımlılıkları yükle
npm install
# veya
yarn install
```

### Geliştirme Sunucusunu Başlat

```bash
npm run dev
# veya
yarn dev
```

Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

## 📁 Proje Yapısı

```
technomay/
├── app/
│   ├── [locale]/              # Dil dinamik segmenti
│   │   ├── layout.tsx         # Ana layout
│   │   ├── page.tsx           # Ana sayfa
│   │   └── [page]/            # Sayfalar: hakkimizda, hizmetler, vb.
│   └── not-found.tsx
├── components/                # React bileşenleri
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Partners.tsx
│   ├── Footer.tsx
│   └── ...
├── messages/                  # Çeviri dosyaları
│   ├── en.json
│   ├── tr.json
│   ├── de.json
│   └── ar.json
├── i18n/
│   └── request.ts            # i18n konfigürasyonu
├── public/                   # Statik dosyalar
└── middleware.ts             # Locale middleware
```

## 🎨 Sayfa Yapısı

### Ana Sayfada Bulunan Bölümler

1. **Navbar** - Navigasyon ve dil seçici
2. **Hero** - Başlık ve CTA butonları (Animasyonlu arka plan)
3. **About** - Şirket hakkında (Vizyon & Misyon)
4. **Features** - Sunulan hizmetler (6 özellik kartı)
5. **Partners** - İş ortakları (Marquee animasyonu)
6. **Footer** - Alt bilgi ve linkler

### Alt Sayfalar

- `/hakkimizda` - Kurumsal bilgiler
- `/hizmetler` - Sunulan hizmetlerin detayı (6 hizmet)
- `/kariyer` - Kariyer fırsatları
- `/iletisim` - İletişim formu (İnteraktif)
- `/kvkk` - GDPR/KVKK aydınlatma
- `/gizlilik` - Gizlilik politikası
- `/sartlar` - Kullanım şartları

## 🔧 Teknolojiler

| Teknoloji | Versiyon | Amaç |
|-----------|----------|------|
| Next.js | 16.0.8 | Framework |
| React | 19 | UI Library |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | Latest | Animations |
| next-intl | 4.5.8 | Internationalization |
| React Icons | Latest | Icons |

## 📖 Çeviriler Nasıl Çalışır?

Tüm çeviriler `/messages` klasöründe JSON dosyaları olarak saklanır. Bileşenlerde kullanmak için:

```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('SectionName');
  
  return <h1>{t('key')}</h1>;
}
```

### Çeviri Dosya Yapısı

```json
{
  "SectionName": {
    "key1": "Değer 1",
    "key2": "Değer 2",
    "nested": {
      "key3": "Değer 3"
    }
  }
}
```

## 🌐 URL Yapısı

- `/` → Varsayılan locale (TR)
- `/en` → İngilizce
- `/de` → Almanca
- `/ar` → Arapça
- `/tr/hakkimizda` → Türkçe Hakkımızda sayfası
- `/en/about` → İngilizce About sayfası

## 🎯 Komutlar

### Development

```bash
npm run dev              # Geliştirme sunucusunu başlat
npm run dev -- --open   # Tarayıcıda otomatik aç
```

### Build

```bash
npm run build            # Production build oluştur
npm run start            # Build'i başlat
npm run lint             # ESLint kontrolü
```

## 🚀 Vercel'e Deploy

### 1. Vercel CLI ile

```bash
npm install -g vercel
vercel
```

### 2. GitHub Push ile

Vercel'i GitHub'a bağlayın ve otomatik deploy aktif hale getirin.

### 3. Ortam Değişkenleri

`.env.local` dosyası oluşturun (gerekirse):

```env
# Gerekli değişkenler buraya ekleyin
```
## 🐛 Sorun Bildir

Bir bug bulduysanız, lütfen vr0cksdev@gmail.com adresine mail atın

## 📜 Lisans

© 2025 Technomay. Tüm hakları saklıdır.

## 📧 İletişim

- **E-posta:** vr0cksdev@gmail.com
- **Web:** https://yigit-canli.vercel.app/en
- **Adres:** Ankara Teknoloji Merkezi, Ankara, Türkiye
- **Telefon:** +90 (312) XXX XXXX

## 🙏 Teşekkürler
---

**Son Güncelleme:** Aralık 2025
**Versiyon:** 1.0.0
