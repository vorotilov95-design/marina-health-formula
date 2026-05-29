import { useRef, useState } from "react";
import { routes, images } from "../data";
import { Icon } from "../components/Icon";
import { PageShell } from "../components/PageShell";
import { ProgressBar } from "../components/ProgressBar";

const lockedWeeks = [
  ["2", "Закрепление питания", "Формирование привычек и работа с порциями."],
  ["3", "ЖКТ и самочувствие", "Оптимизация пищеварения и работа с усвоением."],
  ["4", "Питание в реальной жизни", "Рестораны, поездки и социальные события."],
  ["5", "Микробиота и энергия", "Кормление полезных бактерий и уровень сил."],
  ["6", "Сон и энергия", "Гигиена сна и влияние на метаболизм."],
  ["7", "Стресс и пищевое поведение", "Работа с заеданием и эмоциональным голодом."],
  ["8", "Дефициты, витамины и минералы", "Грамотная поддержка организма нутрицевтиками."],
  ["9", "Движение и тело", "Адаптивная физическая активность для здоровья."],
  ["10", "Адаптация под реальную жизнь", "Укрепление результатов в долгосрочной перспективе."],
  ["11", "Пересборка и углубление", "Анализ промежуточных итогов и коррекция курса."],
  ["12", "Закрепление и выход", "Подведение итогов и стратегия самостоятельного пути."],
];

export function CourseScreen({ onNavigate }) {
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  function showToast(message) {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 3000);
  }

  return (
    <PageShell
      active={routes.course}
      avatar={images.avatarCourse}
      className="max-w-screen-md pt-6"
      onNavigate={onNavigate}
    >
      <section className="mb-8">
        <h2 className="font-headline-xl text-headline-xl text-graphite mb-1">Мой курс</h2>
        <p className="font-body-md text-muted-text">
          Материалы открываются постепенно, чтобы вы могли комфортно внедрять изменения в свою жизнь.
        </p>
      </section>

      <section className="mb-section-gap">
        <div className="bg-white-card border border-border-light rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-label-sm text-label-sm px-3 py-1 bg-olive-soft text-primary rounded-full uppercase tracking-wider">
              Текущий статус
            </span>
            <Icon className="text-primary material-filled" name="stars" />
          </div>
          <h3 className="font-headline-md text-headline-md text-graphite mb-2">
            Сейчас: подготовительный этап
          </h3>
          <p className="font-body-sm text-muted-text mb-4">Открыта 0 неделя — фундамент вашего здоровья.</p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-end">
              <span className="font-label-sm text-muted-text uppercase">0 из 12 недель курса пройдено</span>
              <span className="font-label-md text-primary">0%</span>
            </div>
            <ProgressBar track="bg-secondary-container" value={0} />
          </div>
          <div className="flex items-center gap-2 p-3 bg-surface-container-low rounded-lg border border-border-light/50">
            <Icon className="text-primary text-[20px]" name="info" />
            <p className="font-body-sm text-on-surface-variant">
              До открытия следующей недели: <span className="font-semibold">после проверки диагностики</span>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 pb-12">
        <div className="mb-6">
          <h3 className="font-headline-lg text-headline-lg text-graphite">Весь маршрут</h3>
          <p className="font-body-sm text-muted-text mt-1">13 этапов: подготовка и 12 недель программы</p>
        </div>

        <div className="week-card bg-white-card border-2 border-primary rounded-xl p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 min-w-[40px] rounded-full bg-olive-soft flex items-center justify-center text-primary font-bold text-lg">
              0
            </div>
            <div className="flex-grow">
              <h4 className="font-headline-md text-headline-md text-graphite mb-1">Диагностика и подготовка</h4>
              <p className="font-body-sm text-muted-text mb-4">
                Анкета, анализы, дневник питания, стартовые замеры и вводные материалы.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5">
                  <Icon className="text-[18px] text-primary material-filled" name="check_circle" />
                  <span className="font-label-sm text-primary uppercase tracking-wide">Открыта</span>
                </div>
                <button
                  className="bg-primary text-white font-label-md py-2 px-6 rounded-lg shadow-sm hover:bg-olive-dark transition-colors active:scale-95"
                  onClick={() => onNavigate(routes.week)}
                  type="button"
                >
                  Открыть
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          className="week-card w-full text-left bg-surface-container/60 border border-border-light rounded-xl p-5"
          onClick={() => showToast("Эта неделя откроется после проверки стартовой диагностики.")}
          type="button"
        >
          <div className="flex items-start gap-4 opacity-90">
            <div className="w-10 h-10 min-w-[40px] rounded-full bg-secondary-container flex items-center justify-center text-muted-text font-bold text-lg">
              1
            </div>
            <div className="flex-grow">
              <h4 className="font-headline-md text-headline-md text-graphite mb-1">Старт и питание</h4>
              <p className="font-body-sm text-muted-text mb-4">
                Здоровая тарелка, ритм питания, белок, клетчатка и вода.
              </p>
              <div className="flex items-center mt-auto justify-center">
                <span className="border border-outline-variant text-muted-text/80 font-label-md py-2 px-4 rounded-lg bg-transparent">
                  Откроется после диагностики
                </span>
              </div>
            </div>
          </div>
        </button>

        <div className="space-y-4">
          {lockedWeeks.map(([number, title, text]) => (
            <LockedWeek
              key={number}
              number={number}
              onClick={() =>
                showToast("Эта неделя пока закрыта. Куратор откроет доступ, когда вы завершите текущий этап.")
              }
              text={text}
              title={title}
            />
          ))}
        </div>
      </section>

      <div
        className={`fixed bottom-[90px] left-1/2 z-[100] w-[calc(100%-40px)] max-w-[400px] -translate-x-1/2 rounded-lg bg-inverse-surface px-5 py-3 text-center text-body-sm text-white transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0 pointer-events-none"
        }`}
      >
        {toast}
      </div>
    </PageShell>
  );
}

function LockedWeek({ number, title, text, onClick }) {
  return (
    <button
      className="week-card w-full bg-surface-container/30 border border-border-light border-dashed rounded-xl p-5 grayscale text-left"
      onClick={onClick}
      type="button"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 min-w-[40px] rounded-full border border-border-light flex items-center justify-center text-outline-variant font-bold text-lg">
          {number}
        </div>
        <div className="flex-grow">
          <h4 className="font-headline-md text-headline-md text-outline-variant mb-1">{title}</h4>
          <p className="font-body-sm text-outline-variant/60 mb-4">{text}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1.5">
              <Icon className="text-[18px] text-outline-variant" name="lock" />
              <span className="font-label-sm text-outline-variant uppercase tracking-wide">Закрыта</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
