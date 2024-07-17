import { Outlet } from "react-router-dom";
import "./App.module.css";
import "./index.css";
import { UserProvider } from "./components/context/UserContext";

function App() {
  return (
    <UserProvider>
      <main>
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default App;
