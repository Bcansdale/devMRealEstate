import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid/index.js";
import { useAuth } from "../../context/AuthContext.jsx";

function Login({ handleClickShowForm, handleCloseForm }) {
  const [loginError, setLoginError] = useState(null);
  const [username, setUsername] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin");

  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (username && password) {
      login(username, password).then((res) => {
        const { message, success } = res.data;

        if (success) {
          handleCloseForm(null);
        } else {
          setLoginError(message);
        }
      });
    }
  }

  // useEffect(
  //     function () {
  //       if (isAuthenticated) navigate("/app", { replace: true });
  //     },
  //     [isAuthenticated, navigate],
  // );

  return (
    <>
      <div className="active">
        <div className="fixed min-h-screen flex items-center justify-center w-full z-50">
          <div className="bg-white shadow-xl rounded-2xl px-8 py-6 max-w-md text-[#444445]">
            <h1 className="text-2xl text-[#444445] text-center mb-4">
              Welcome Back!
              <div
                className="float-end cursor-pointer w-5 h-5"
                onClick={(e) => handleClickShowForm(e, null)}
              >
                <XMarkIcon />
              </div>
            </h1>

            <form onSubmit={handleSubmit}>
              {loginError ? (
                <div className="text-red-600 mb-4">{loginError}</div>
              ) : (
                ""
              )}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#444445] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#444445] mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <a
                  href="#"
                  className="text-sm text-[#444445] hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-[#444445] focus:ring-orange-500 focus:outline-none accent-[#444445]"
                    defaultChecked
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-[#444445]"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  onClick={(e) => handleClickShowForm(e, "user/signup")}
                  className="text-sm text-[#444445] hover:text-orange-500 cursor-pointer duration-200"
                >
                  Sign Up
                </a>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#444445] hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
