import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge>Без QR</Badge>
            <Badge>Без приложений</Badge>
            <Badge>Для офлайн-бизнеса</Badge>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Один касание — и клиент уже с вами
          </h1>

          <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
            NFC-метки и умные таплинки для сбора отзывов, контактов, меню и аналитики.
            Управляйте всем через личный кабинет по подписке.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-4">
              <div className="text-sm font-semibold">📲 1 касание</div>
              <div className="text-sm text-zinc-600">быстрее, чем QR</div>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-4">
              <div className="text-sm font-semibold">⭐ +отзывы</div>
              <div className="text-sm text-zinc-600">проще оставить</div>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-4">
              <div className="text-sm font-semibold">📊 аналитика</div>
              <div className="text-sm text-zinc-600">в личном кабинете</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/signup">
              <Button size="lg">Попробовать бесплатно</Button>
            </a>
            <a href="#how">
              <Button size="lg" variant="outline">
                Посмотреть, как работает
              </Button>
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            7 дней бесплатно • Отмена в любой момент • Подходит кафе, салонам, клиникам, магазинам
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="rounded-3xl bg-white p-5 shadow-sm">
            <div className="text-xs text-zinc-500">Пример таплинка</div>
            <div className="mt-2 text-lg font-semibold">Кофейня “Tappo”</div>
            <div className="mt-1 text-sm text-zinc-600">Меню • Контакты • Отзывы</div>

            <div className="mt-5 space-y-3">
              <div className="h-11 rounded-2xl border border-zinc-200 bg-zinc-50" />
              <div className="h-11 rounded-2xl border border-zinc-200 bg-zinc-50" />
              <div className="h-11 rounded-2xl border border-zinc-200 bg-zinc-50" />
              <div className="h-24 rounded-2xl border border-zinc-200 bg-zinc-50" />
            </div>

            <div className="mt-5 text-xs text-zinc-500">NFC → открывает этот экран</div>
          </div>
        </div>
      </div>
    </section>
  );
}
