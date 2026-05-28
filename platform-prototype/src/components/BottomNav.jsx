import { navItems } from "../data";
import { Icon } from "./Icon";

export function BottomNav({ active, onNavigate }) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] flex justify-around items-center px-2 pb-safe h-[72px] bg-surface/90 backdrop-blur-md border-t border-border-light shadow-[0_-1px_4px_0_rgba(0,0,0,0.04)] z-50">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            className={`flex flex-col items-center justify-center transition-all active:opacity-80 active:scale-95 ${
              isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary-container"
            }`}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            <Icon className="mb-1" filled={isActive} name={item.icon} />
            <span className="font-label-sm text-label-sm">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
