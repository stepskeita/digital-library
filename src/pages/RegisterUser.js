import React, { useState } from "react";
import CustomTitle from "../components/layout/CustomTitle";
import Container from "../components/layout/Container";
import TextInput from "../components/dashboard/TextInput";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmi = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <CustomTitle title="Register User" />
      <Container>
        <div className="max-w-xl mx-auto p-6 bg-white/95 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-7">Register User</h2>

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
