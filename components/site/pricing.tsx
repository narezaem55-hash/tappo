import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Start",
    priceM: "490 ₽/мес",
    priceY: "4 900 ₽/год",
    badge: "Для одной точки",
    features: [
      "1 таплинк",
      "до 1 NFC-метки",
      "Отзывы (без модерации)",
      "Базовая аналитика",
      "Логотип Tappo",
      "Email-поддержка",
    ],
    limits: ["Без брендирования", "Ограниченная аналитика"],
    cta: "Начать бесплатно",
    highlight: false,
  },
  {
    name: "Business",
    priceM: "1 490 ₽/мес",
    priceY: "14 900 ₽/год",
    badge: "Рекомендуем",
    features: [
      "до 5 таплинков",
      "до 10 NFC-меток",
      "Отзывы + статусы",
      "Расширенная аналитика",
      "Кастомные цвета",
      "Уведомления",
      "Приоритетная поддержка",
    ],
    limits: ["Командный доступ — нет"],
    cta: "Выбрать Business",
    highlight: true,
  },
  {
    name: "Pro",
    priceM: "3 490 ₽/мес",
    priceY: "34 900 ₽/год",
    badge: "Сеть / масштаб",
    features: [
      "безлимит таплинков",
      "безлимит NFC",
      "Модерация отзывов",
      "Экспорт данных",
      "Полное брендирование",
      "Командный доступ",
      "Персональный менеджер",
    ],
    limits: [],
    cta: "Выбрать Pro",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold md:text-3xl">Тарифы и подписка</h2>
        <p className="mt-2 text-zinc-600">Подписка даёт управление, аналитику и контроль. Метки — это носитель.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <Card key={p.name} className={p.highlight ? "border-black shadow-md" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{p.name}</CardTitle>
                <Badge className={p.highlight ? "border-black bg-black text-white" : ""}>{p.badge}</Badge>
              </div>
              <CardDescription className="mt-2">
                <span className="text-2xl font-semibold text-zinc-900">{p.priceM}</span>
                <span className="ml-2 text-sm text-zinc-500">или {p.priceY}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <Button className="w-full" variant={p.highlight ? "default" : "outline"}>
                {p.cta}
              </Button>

              <Separator />

              <div className="space-y-2">
                <div className="text-sm font-medium">Включено</div>
                <ul className="space-y-1 text-sm text-zinc-700">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>

              {p.limits.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm font-medium">Ограничения</div>
                  <ul className="space-y-1 text-sm text-zinc-700">
                    {p.limits.map((l) => (
                      <li key={l}>• {l}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                <div className="font-medium">Почему лучше QR</div>
                <div className="mt-1 text-zinc-600">
                  NFC не требует камеры, выглядит премиально, даёт выше конверсию и легко управляется из кабинета.
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="text-sm font-semibold">Бесплатно</div>
        <div className="mt-2 text-sm text-zinc-700">1 демо-таплинк • Превью без NFC • 7 дней теста • Отмена в любой момент</div>
      </div>
    </section>
  );
}
