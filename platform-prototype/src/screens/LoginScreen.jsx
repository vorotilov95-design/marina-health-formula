import { useState } from "react";
import { images } from "../data";
import { Button } from "../components/Button";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";

export function LoginScreen({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [activation, setActivation] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-body-md text-on-background bg-surface-container-low">
      <header className="w-full pt-12 pb-8 flex justify-center">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-graphite tracking-tight">
          Формула здоровья
        </h1>
      </header>

      <main className="flex-1 px-container-padding-mobile flex flex-col items-center py-10">
        <div className="bg-white-card w-full max-w-md rounded-xl border border-border-light soft-shadow p-10">
          <div className="mb-8">
            <h2 className="font-headline-md-mobile text-headline-md-mobile text-graphite mb-3">
              {activation ? "Создайте пароль для входа" : "Войдите в личный кабинет"}
            </h2>
            <p className="font-body-sm text-body-sm text-muted-text">
              {activation
                ? "Этот пароль понадобится, чтобы возвращаться к урокам, материалам и вашей персональной программе."
                : "Здесь будут ваши уроки, задания, персональная программа, файлы и материалы курса."}
            </p>
          </div>

          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            {!activation && (
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 bg-surface-container-low border border-border-light rounded-lg text-body-md placeholder:text-outline transition-all"
                  id="email"
                  placeholder="example@mail.com"
                  type="email"
                />
                <p className="mt-1.5 font-body-sm text-[12px] leading-[16px] text-muted-text">
                  Введите email, который вы указывали при покупке курса.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                  {activation ? "Новый пароль" : "Пароль"}
                </label>
                {!activation && (
                  <button
                    className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors"
                    type="button"
                  >
                    Забыли пароль?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  className="w-full px-4 py-3 bg-surface-container-low border border-border-light rounded-lg text-body-md placeholder:text-outline transition-all"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                  onClick={() => setShowPassword((value) => !value)}
                  type="button"
                >
                  <Icon className="text-[20px]" name={showPassword ? "visibility_off" : "visibility"} />
                </button>
              </div>
            </div>

            {activation && (
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="repeatPassword">
                  Повторите пароль
                </label>
                <input
                  className="w-full px-4 py-3 bg-surface-container-low border border-border-light rounded-lg text-body-md placeholder:text-outline transition-all"
                  id="repeatPassword"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            )}

            <div className="pt-2">
              <Button onClick={onLogin} type="submit">
                {activation ? "Создать пароль и войти" : "Войти"}
              </Button>
            </div>

            {!activation && (
              <p className="mt-4 text-center font-body-sm text-[13px] text-on-surface-variant/80 italic">
                Доступ к кабинету получают только ученицы курса.
              </p>
            )}
          </form>

          {!activation && (
            <>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border-light" />
                </div>
                <div className="relative flex justify-center text-label-sm uppercase tracking-wider">
                  <span className="bg-white-card px-4 text-outline">или</span>
                </div>
              </div>

              <button
                className="w-full bg-secondary-container hover:bg-secondary-fixed-dim text-primary font-label-md text-label-md py-4 rounded-full flex items-center justify-center gap-3 transition-all active:scale-95"
                type="button"
              >
                <FallbackImage alt="Google" className="w-5 h-5" src={images.google} />
                Продолжить через Google
              </button>

              <div className="mt-8 text-center">
                <button
                  className="font-label-md text-label-md text-primary hover:underline transition-all"
                  onClick={() => setActivation(true)}
                  type="button"
                >
                  Активировать кабинет впервые
                </button>
                <div className="mt-4 pt-4 border-t border-border-light/50">
                  <button
                    className="font-label-md text-label-md text-secondary hover:text-primary transition-all"
                    type="button"
                  >
                    Не нашли доступ? Написать куратору
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-12 w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden mix-blend-multiply pointer-events-none">
          <FallbackImage
            alt="Оливковая ветвь"
            className="w-full h-full object-cover"
            fallbackClassName="w-full h-full"
            src={images.loginOlive}
          />
        </div>
      </main>
    </div>
  );
}
