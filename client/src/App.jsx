import { Outlet } from "react-router-dom";
import "./App.module.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./components/context/UserContext";
import NavBarDescktop from "./components/NavBarDescktop/NavBarDescktop";

function App() {
  return (
    <UserProvider>
      <main>
        <NavBarDescktop />
        <Outlet />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </UserProvider>
  );
}

export default App;
