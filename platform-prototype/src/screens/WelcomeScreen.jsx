import { routes, images } from "../data";
import { Button } from "../components/Button";
import { FallbackImage } from "../components/FallbackImage";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";

const steps = [
  {
    icon: "assignment",
    title: "Диагностика",
    text: "Анкета, анализы, дневник питания и стартовые замеры.",
  },
  {
    icon: "medical_services",
    title: "Персональный маршрут",
    text: "Команда изучит данные и подготовит ваши фокусы.",
  },
  {
    icon: "auto_stories",
    title: "Недельные материалы",
    text: "Уроки, гайды, задания и чек-листы будут открываться постепенно.",
  },
  {
    icon: "forum",
    title: "Поддержка куратора",
    text: "Живое общение и вопросы остаются в Telegram.",
  },
];

export function WelcomeScreen({ onNavigate }) {
  return (
    <PageShell active={routes.dashboard} avatar={images.avatarWelcome} onNavigate={onNavigate}>
      <section className="mb-section-gap">
        <div className="rounded-xl overflow-hidden mb-6 h-48 w-full relative">
          <FallbackImage
            alt="Wellness"
            className="w-full h-full object-cover"
            fallbackClassName="w-full h-full"
            src={images.welcomeHero}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-graphite mb-4">
          Добро пожаловать в «Формулу здоровья»
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
          Это ваш личный кабинет на время курса. Здесь будет храниться ваш персональный маршрут на
          курсе, индивидуальные фокусы, материалы, задания и рекомендации по питанию и образу жизни.
        </p>
      </section>

      <section className="mb-section-gap">
        <h3 className="font-headline-md text-headline-md text-graphite mb-6">
          Сначала мы соберём вашу точку старта
        </h3>
        <div className="space-y-6">
          {steps.map((step) => (
            <div className="relative flex gap-4 step-line" key={step.title}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-olive-soft flex items-center justify-center z-10">
                <Icon className="text-primary" name={step.icon} />
              </div>
              <div className="flex-grow bg-white-card p-6 rounded-2xl shadow-sm">
                <h4 className="font-headline-md-mobile text-headline-md-mobile text-graphite mb-1">
                  {step.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-3 mt-4">
        <Button onClick={() => onNavigate(routes.diagnostics)} size="square" variant="primarySquare">
          Начать диагностику
        </Button>
        <Button size="square" variant="secondary">
          Посмотреть, как устроен курс
        </Button>
      </div>
    </PageShell>
  );
}
