import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl font-semibold">Регистрация</h1>
      <p className="mt-2 text-zinc-600">Пока заглушка. Дальше подключим магик-линк и тарифы.</p>

      <div className="mt-6 space-y-3 rounded-3xl border border-zinc-200 p-6">
        <input className="h-11 w-full rounded-2xl border border-zinc-200 px-4" placeholder="Email" />
        <input className="h-11 w-full rounded-2xl border border-zinc-200 px-4" placeholder="Пароль" type="password" />
        <Button className="w-full">Создать аккаунт</Button>
        <div className="text-sm text-zinc-600">
          Уже есть аккаунт? <Link className="underline" href="/login">Войти</Link>
        </div>
      </div>
    </main>
  );
}
