import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JoyJourney - Happiness Tracker & Daily Mood Journal",
    template: "%s | JoyJourney", // untuk halaman child, misal "Dashboard | JoyJourney"
  },
  description:
    "Mulai perjalanan bahagiamu hari ini dengan JoyJourney! Track mood harian, gratitude journal, analisis PERMA, dan insight personal untuk tingkatkan well-being. Gratis, mudah, dan berbasis psikologi positif.",

  // Open Graph - penting untuk share di sosmed (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "JoyJourney - Temukan Kebahagiaan Setiap Hari",
    description:
      "Aplikasi tracking kebahagiaan harian dengan mood log, gratitude practice, dan analisis berbasis PERMA. Mulai journey well-being mu sekarang!",
    url: "https://www.joyjourney.app", // ganti sesuai domain asli
    siteName: "JoyJourney",
    images: [
      {
        url: "/frame/hero/10.png", // buat gambar 1200×630 px: gradient hangat + path/journey + senyum
        width: 1200,
        height: 630,
        alt: "JoyJourney - Your Daily Happiness Journey",
      },
    ],
    locale: "id_ID", // atau "en_US" tergantung target utama
    type: "website",
  },

  // Keywords & lainnya
  keywords: [
    "happiness tracker",
    "mood journal",
    "daily gratitude",
    "wellness journey",
    "mental health app",
    "PERMA tracker",
    "joy journey",
    "jurnal mood harian",
    "aplikasi kebahagiaan",
  ],

  // Metadata tambahan untuk creator
  authors: [
    { name: "uzishdq / JoyJourney Team", url: "https://uzishdq.vercel.app" },
  ],
  creator: "uzishdq",
  publisher: "comeTrue.id",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelFont.className} antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
