import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/root-layout";
import App from "./pages/app";
import Dashboard from "./pages/dashboard";
import PlatformLayout from "./pages/platform/platform-layout";
import ActiveTasksTab from "./pages/platform/tabs/active-tasks-tab";
import NewTaskTab from "./pages/platform/tabs/new-task-tab";
import SettingsTab from "./pages/platform/tabs/settings-tab";
import TaskManager from "./pages/task-manager";
import GlobalSettings from "./pages/global-settings";

const container = document.getElementById("root");
// biome-ignore lint/style/noNonNullAssertion: <!-- Ignore because we are sure that the container element exists -->
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route element={<RootLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/platform/:platformId" element={<PlatformLayout />}>
            <Route index path="new" element={<NewTaskTab />} />
            <Route path="running" element={<ActiveTasksTab />} />
            <Route path="settings" element={<SettingsTab />} />
          </Route>
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/global-settings" element={<GlobalSettings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
