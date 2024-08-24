function Login() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 w-96">
        <div className="flex justify-center">
          <img src="assets/images/logo.png" alt="" width={200} height={150} />
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <input
            type="text"
            name="login"
            placeholder="Login"
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
            onClick={() => console.log("Login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
