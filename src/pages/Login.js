import React, { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../action/userAction";
import LoadingIndicator from "../components/layout/LoadingIndicator";
import CustomTitle from "../components/layout/CustomTitle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo, error, loading } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (userInfo) history.push("/dashboard");
  }, [userInfo, history]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
  };
  return (
    <div className="min-h-screen relative">
      <CustomTitle title="Login" />
      <img
        src="img/library.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-20"
      />
      <div className="absolute top-0 left-0 w-full h-full object-cover z-30 flex items-center justify-center">
        <Container>
          <form
            onSubmit={handleSubmit}
            class="max-w-md p-6 bg-white/95 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto"
          >
            <div className="w-fit mx-auto mb-7 flex flex-col items-center">
              <Link to="/">
                <img src="/img/web-logo.png" alt="D-LIB" />
              </Link>
              <div className="text-sm italic">
                This area is reserved for only admins
              </div>
            </div>
            {error && (
              <div className="bg-red-300 p-2 my-2 mb-4 text-black">{error}</div>
            )}
            {/* email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-1 text-sm after:content-['*'] after:ml-1 after:text-red-500"
              >
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="px-2 p-2 outline-none border border-sky-500/20 w-full focus:border-sky-500"
                placeholder="Email"
              />
            </div>

            {/* password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block mb-1 text-sm after:content-['*'] after:ml-1 after:text-red-500"
              >
                Password
              </label>
              <div className="relative">
                <input
                  required
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="px-2 p-2 outline-none border border-sky-500/20 w-full focus:border-sky-500"
                  placeholder="Password"
                />
                {!showPassword ? (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FaEye className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FaEyeSlash className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer" />
                  </button>
                )}
              </div>
            </div>

            <Link
              to="forgot-password"
              className="text-sm underline block w-fit mb-5"
            >
              Forgot your password?
            </Link>

            <button
              disabled={loading}
              type="submit"
              className="bg-sky-600 w-full text-white py-2 hover:bg-sky-500"
            >
              {loading ? <LoadingIndicator message="Loading..." /> : "Sign in"}
            </button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
