import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import "./LoginPage.css";

const RegisterPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="register-page">
      <form onClick={register}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input onChange={(e) => setRegisterEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input onChange={(e) => setRegisterPassword(e.target.value)} />
        </div>

        <div className="button-container">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
