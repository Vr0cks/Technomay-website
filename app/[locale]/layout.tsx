import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Dosya yanına geldiği için yol kısaldı
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

// Dile göre metadata
const metadataByLocale = {
  tr: {
    title: "Technomay | Geleceği Şekillendiren Teknolojiler",
    description: "Technomay, AR-GE ve ÜR-GE alanlarında geleceğin teknolojilerini bugüne taşıyan İnovasyon şirketidir.",
  },
  en: {
    title: "Technomay | Shaping the Future with Technology",
    description: "Technomay is an innovation company that brings future technologies to life in R&D and innovation fields.",
  },
  de: {
    title: "Technomay | Die Zukunft mit Technologie gestalten",
    description: "Technomay ist ein Innovationsunternehmen, das Zukunftstechnologien in den Bereichen F&E lebendig macht.",
  },
  ar: {
    title: "Technomay | صياغة المستقبل بالتكنولوجيا",
    description: "Technomay هي شركة مبتكرة تجعل تقنيات المستقبل واقعاً في مجالات البحث والتطوير والابتكار.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.tr;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

// Layout artık params alıyor
export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Gelen dil geçerli mi kontrol et
  if (!['tr', 'en', 'de', 'ar'].includes(locale)) {
    notFound();
  }

  // Mesajları sunucudan çek
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        {/* Çeviri Sağlayıcısı */}
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="min-h-[calc(100vh-80px)]">
              {children}
            </div>
            <Footer />
            <CookieBanner />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}