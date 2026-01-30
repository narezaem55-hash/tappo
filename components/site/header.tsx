import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-black" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Tappo</div>
            <div className="text-xs text-zinc-600">NFC & Taplinks</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
          <a href="#how">Как работает</a>
          <a href="#products">Продукты</a>
          <a href="#pricing">Тарифы</a>
          <a href="#trust">Доверие</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost">Войти</Button>
          </Link>
          <Link href="/signup">
            <Button>Создать таплинк</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
