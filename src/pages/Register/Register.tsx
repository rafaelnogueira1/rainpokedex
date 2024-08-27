import { useAuth } from "@/hooks";
import { SyntheticEvent, useRef } from "react";
import { Link, Navigate } from "react-router-dom";

function Register() {
  const { register, user } = useAuth();
  const loginForm = useRef<HTMLFormElement>(null);

  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const { email, password } = loginForm.current?.elements as unknown as {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };

    register({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 w-96">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src="assets/images/logo.png" alt="" width={200} height={150} />
          <h1 className="text-3xl text-blue-800 font-bold">Register</h1>
        </div>
        <div className="mt-5">
          <form
            action=""
            method="post"
            ref={loginForm}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="w-full h-[45px] p-3 rounded-3xl border border-solid border-gray-200"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full h-[45px] p-3 rounded-3xl border border-solid border-gray-200"
            />

            <button
              type="submit"
              name="bt-login"
              className="text-md bg-blue-700 text-white p-2 rounded-full"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
          <div className="text-center mt-6 underline">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
