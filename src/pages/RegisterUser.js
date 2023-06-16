import React, { useState } from "react";
import CustomTitle from "../components/layout/CustomTitle";
import Container from "../components/layout/Container";
import TextInput from "../components/dashboard/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../action/userAction";
import SuccessAlert from "../components/layout/SuccessAlert";
import {
  REGISTER_USER_ERROR,
  REGISTER_USER_RESET,
} from "../reducers/types/userTypes";
import ErrorAlert from "../components/layout/ErrorAlert";
const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { error, success, loading } = useSelector(
    (state) => state.userRegister
  );
  const dispatch = useDispatch();

  const handleSubmi = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name,
        email,
      })
    );
  };

  const resetState = () => {
    setEmail("");
    setName("");
  };
  return (
    <div>
      <CustomTitle title="Register User" />
      <Container>
        <div className="max-w-xl mx-auto p-6 bg-white/95 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-7">Register User</h2>
          {error && (
            <ErrorAlert
              text={error}
              handleClose={() => dispatch({ type: REGISTER_USER_ERROR })}
            />
          )}

          {success && (
            <SuccessAlert
              text={
                <p>
                  User is successfully registered. Inform them to check their
                  email for their login credentials
                </p>
              }
              handleClose={() => {
                dispatch({ type: REGISTER_USER_RESET });
                resetState();
              }}
            />
          )}
          <form onSubmit={handleSubmi}>
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              label="Name"
            />
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              label="Email"
              type="email"
            />

            <button
              disabled={loading}
              type="submit"
              className="bg-sky-600 w-full text-white py-2 hover:bg-sky-500"
            >
              Register
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterUser;
