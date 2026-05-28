import { Button } from "./Button";
import { Icon } from "./Icon";

export function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/20 px-container-padding-mobile">
      <div className="w-full max-w-sm rounded-xl border border-border-light bg-white-card p-6 soft-shadow">
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-olive-soft flex items-center justify-center text-primary">
            <Icon name="forum" />
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface text-center mb-6">{children}</p>
        <Button onClick={onClose} size="square" variant="primarySquare">
          Понятно
        </Button>
      </div>
    </div>
  );
}
