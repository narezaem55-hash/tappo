import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { k: "+37%", v: "отзывов у клиентов" },
  { k: "до 2×", v: "конверсия vs QR" },
  { k: "99.9%", v: "доступность сервиса" },
];

export function Trust() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold md:text-3xl">Доверие и безопасность</h2>
        <p className="mt-2 text-zinc-600">
          Tappo — это контроль точки контакта: офлайн → онлайн → действие → аналитика.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.k}>
            <CardHeader>
              <CardTitle className="text-3xl">{s.k}</CardTitle>
              <CardDescription className="mt-2">{s.v}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Почему NFC лучше QR</CardTitle>
            <CardDescription className="mt-2">
              Быстрее, современнее, не требует камеры, не “дешевит” точку, сложнее подделать.
            </CardDescription>
          </CardHeader>
          <CardContent />
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Безопасность и хранение</CardTitle>
            <CardDescription className="mt-2">
              HTTPS, облачное хранение, контроль ссылок, защита от подмены, стабильные публичные страницы.
            </CardDescription>
          </CardHeader>
          <CardContent />
        </Card>
      </div>
    </section>
  );
}
