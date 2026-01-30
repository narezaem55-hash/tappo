import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">Tappo</div>
            <div className="mt-1 text-sm text-zinc-600">NFC-метки и умные таплинки для бизнеса</div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-700">
            <a href="#how">Как работает</a>
            <a href="#products">Продукты</a>
            <a href="#pricing">Тарифы</a>
            <a href="#trust">Доверие</a>
            <Link href="/privacy">Политика</Link>
            <Link href="/terms">Оферта</Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Tappo. Все права защищены.</div>
      </div>
    </footer>
  );
}
