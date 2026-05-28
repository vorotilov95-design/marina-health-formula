import { useState } from "react";
import { routes } from "./data";
import { DashboardScreen } from "./screens/DashboardScreen";
import { DiagnosticsScreen } from "./screens/DiagnosticsScreen";
import { FileUploadScreen } from "./screens/FileUploadScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { PlaceholderScreen } from "./screens/PlaceholderScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { Modal } from "./components/Modal";

export default function App() {
  const [screen, setScreen] = useState(routes.login);
  const [curatorModal, setCuratorModal] = useState(false);

  function navigate(nextScreen) {
    setScreen(nextScreen);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  const sharedProps = {
    onNavigate: navigate,
    onCurator: () => setCuratorModal(true),
  };

  return (
    <div className="app-frame">
      {screen === routes.login && <LoginScreen onLogin={() => navigate(routes.welcome)} />}
      {screen === routes.welcome && <WelcomeScreen onNavigate={navigate} />}
      {screen === routes.diagnostics && <DiagnosticsScreen {...sharedProps} />}
      {screen === routes.upload && <FileUploadScreen onNavigate={navigate} />}
      {screen === routes.dashboard && <DashboardScreen {...sharedProps} />}
      {[routes.course, routes.program, routes.profile].includes(screen) && (
        <PlaceholderScreen onNavigate={navigate} page={screen} />
      )}

      <Modal open={curatorModal} onClose={() => setCuratorModal(false)}>
        Здесь будет переход в Telegram-чат куратора
      </Modal>
    </div>
  );
}
