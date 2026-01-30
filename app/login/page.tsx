import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-2xl font-semibold">Вход</h1>
      <p className="mt-2 text-zinc-600">Пока это заглушка. Дальше подключим авторизацию.</p>

      <div className="mt-6 space-y-3 rounded-3xl border border-zinc-200 p-6">
        <input className="h-11 w-full rounded-2xl border border-zinc-200 px-4" placeholder="Email" />
        <input className="h-11 w-full rounded-2xl border border-zinc-200 px-4" placeholder="Пароль" type="password" />
        <Button className="w-full">Войти</Button>
        <div className="text-sm text-zinc-600">
          Нет аккаунта? <Link className="underline" href="/signup">Регистрация</Link>
        </div>
      </div>
    </main>
  );
}
