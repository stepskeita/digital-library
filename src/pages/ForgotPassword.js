import React, { useState } from "react";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LoadingIndicator from "../components/layout/LoadingIndicator";

const ForgotPassword = () => {
  const [values, setValues] = useState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen relative">
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
            <div className="w-fit mx-auto mb-7">
              <Link to="/">
                <img src="/img/web-logo.png" alt="D-LIB" />
              </Link>
            </div>

            <h2 className="mb-4 font-bold text-2xl">Reset Password</h2>

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

            <button
              type="submit"
              className="bg-sky-600 w-full text-white py-2 hover:bg-sky-500"
            >
              Request a reset link
            </button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default ForgotPassword;
