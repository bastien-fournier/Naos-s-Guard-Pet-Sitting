import LoginForm from "../components/LoginForm/LoginForm";
import NavBar from "../components/NavBar/NavBar";

export default function LoginPage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <LoginForm />
      </div>
    </>
  );
}
