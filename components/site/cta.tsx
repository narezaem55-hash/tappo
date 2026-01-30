import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl border border-zinc-200 bg-black p-8 text-white md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Запусти Tappo в своей точке за 10 минут</h3>
            <p className="mt-2 text-white/70">Создай таплинк, подключи метку, собирай отзывы и аналитику.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="/signup">
              <Button size="lg" variant="secondary">
                Создать таплинк бесплатно
              </Button>
            </a>
            <a href="#pricing">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Выбрать тариф
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
