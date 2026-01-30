import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { n: "01", title: "Вы получаете NFC-метку", desc: "Наклейка, брелок или стойка для кассы/ресепшена." },
  { n: "02", title: "Клиент касается телефоном", desc: "Без камеры и приложений — касание занимает секунду." },
  { n: "03", title: "Открывается ваш таплинк", desc: "Отзывы, контакты, меню, соцсети, сайт — всё в одном месте." },
  { n: "04", title: "Клиент делает действие", desc: "Оставляет отзыв, строит маршрут, звонит, подписывается." },
  { n: "05", title: "Вы видите аналитику", desc: "Касания, просмотры, отзывы и эффективность точек." },
];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold md:text-3xl">Как работает Tappo</h2>
        <p className="mt-2 text-zinc-600">Пять шагов от метки на столе до отзывов и аналитики в кабинете.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {steps.map((s) => (
          <Card key={s.n} className="md:col-span-1">
            <CardHeader>
              <div className="text-xs font-medium text-zinc-500">{s.n}</div>
              <CardTitle className="mt-2">{s.title}</CardTitle>
              <CardDescription className="mt-2">{s.desc}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
}
