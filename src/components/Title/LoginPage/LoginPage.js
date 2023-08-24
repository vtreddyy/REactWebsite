import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,} from "firebase/auth";
import "./LoginPage.css";
import { auth } from "./firebaseConfig";
const LoginPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [user, setUser] = useState({});


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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

  const login = async (event) => {
    try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="login-page">
      <form onClick={register}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>

        <div className="button-container">
          <button type="submit">Register</button>
        </div>
      </form>

      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setloginEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setloginPassword(e.target.value)}
            required
          />
        </div>

        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
      <h4> User Logged In: </h4>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>
  );
};

export default LoginPage;
