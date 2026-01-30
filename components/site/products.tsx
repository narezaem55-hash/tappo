import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    title: "NFC-наклейка",
    img: "Фото: круглая/прямоугольная наклейка на столе или кассе",
    forWhom: "Кафе, салоны, магазины",
    use: "Сбор отзывов и быстрый контакт",
    price: "от 490 ₽",
    tag: "Популярно",
  },
  {
    title: "NFC-брелок",
    img: "Фото: брелок на ключах администратора или мастера",
    forWhom: "Мастера, менеджеры, курьеры",
    use: "Личный контакт и визитка",
    price: "от 790 ₽",
    tag: "Мобильный",
  },
  {
    title: "NFC-стойка",
    img: "Фото: стойка на барной стойке / ресепшене",
    forWhom: "Рестораны, клиники, отели",
    use: "Отзывы + навигация клиентов",
    price: "от 1 990 ₽",
    tag: "Для точки",
  },
];

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold md:text-3xl">Каталог NFC-продуктов</h2>
        <p className="mt-2 text-zinc-600">Метка — это “точка касания”. Таплинк — ваш контролируемый экран.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle>{p.title}</CardTitle>
                <Badge>{p.tag}</Badge>
              </div>
              <CardDescription className="mt-2">{p.img}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Назначение</div>
                <div className="text-zinc-600">{p.use}</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Для кого</div>
                <div className="text-zinc-600">{p.forWhom}</div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-lg font-semibold">{p.price}</div>
                <Button>Купить</Button>
              </div>

              <div className="text-xs text-zinc-500">*Можно “в комплекте с подпиской” на тарифах Business/Pro</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
