import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebaseConfig";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); 
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h4>User Logged In:</h4>
      {user?.email}
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default Dashboard;