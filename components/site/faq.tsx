import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const faq = [
  { q: "Нужны ли приложения для NFC?", a: "Нет. Большинство современных смартфонов открывают ссылку по касанию." },
  { q: "Можно ли менять ссылку на метке?", a: "Да. Метка привязана к таплинку, а таплинк редактируется в кабинете." },
  { q: "Что если клиент без NFC?", a: "Таплинк имеет обычный URL — можно продублировать QR как запасной вариант." },
  { q: "Как собирать отзывы?", a: "В таплинк добавляется блок “Отзывы”. Отзывы приходят в кабинет и отмечаются статусами." },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
        <p className="mt-2 text-zinc-600">Короткие ответы на частые вопросы.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {faq.map((i) => (
          <Card key={i.q}>
            <CardHeader>
              <CardTitle>{i.q}</CardTitle>
              <CardDescription className="mt-2">{i.a}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </section>
  );
}
