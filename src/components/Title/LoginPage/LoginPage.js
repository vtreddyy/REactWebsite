import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Link, useNavigate  } from "react-router-dom";
import "./LoginPage.css";
import { auth } from "./firebaseConfig";

const LoginPage = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="login-page">
      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input onChange={(e) => setloginEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input onChange={(e) => setloginPassword(e.target.value)} />
        </div>

        <div className="button-container">
          <button type="submit">Login</button>
          <Link to="/login/register">
            <button>Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
