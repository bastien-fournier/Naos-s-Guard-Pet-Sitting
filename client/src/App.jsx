import { Outlet } from "react-router-dom";
import "./App.module.css";
import "./index.css";
import { UserProvider } from "./components/context/UserContext";
import NavBarDescktop from "./components/NavBarDescktop/NavBarDescktop";

function App() {
  return (
    <UserProvider>
      <main>
        <NavBarDescktop />
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default App;
