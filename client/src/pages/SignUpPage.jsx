import Logo from "../components/Logo/Logo";

import SignUpForm from "../components/SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <div className="flex justify-between items-center mr-3 md:hidden">
        <Logo />
      </div>
      <div>
        <SignUpForm />
      </div>
    </>
  );
}
