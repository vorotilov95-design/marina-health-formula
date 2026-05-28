import { routes, images } from "../data";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";

const content = {
  [routes.course]: {
    active: routes.course,
    icon: "school",
    title: "Раздел курса будет добавлен позже",
    text: "Здесь появятся недели, уроки, гайды, задания и чек-листы.",
  },
  [routes.program]: {
    active: routes.program,
    icon: "calendar_today",
    title: "Персональная программа готовится",
    text: "После проверки стартовых данных команда подготовит персональные фокусы.",
  },
  [routes.profile]: {
    active: routes.profile,
    icon: "person",
    title: "Профиль будет добавлен позже",
    text: "Здесь будут настройки аккаунта и данные ученицы.",
  },
};

export function PlaceholderScreen({ page, onNavigate }) {
  const item = content[page] || content[routes.course];

  return (
    <PageShell active={item.active} avatar={images.avatarDashboard} onNavigate={onNavigate}>
      <Card className="p-8 text-center mt-12">
        <div className="w-16 h-16 rounded-full bg-olive-soft text-primary flex items-center justify-center mx-auto mb-5">
          <Icon className="text-4xl" name={item.icon} />
        </div>
        <h2 className="font-headline-lg text-headline-lg text-graphite mb-3">{item.title}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">{item.text}</p>
      </Card>
    </PageShell>
  );
}
