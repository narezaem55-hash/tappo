import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tappo — NFC-метки и умные таплинки для бизнеса",
  description:
    "Платформа для NFC-меток и умных таплинков: отзывы, контакты, меню, аналитика. Управление через личный кабинет по подписке.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
