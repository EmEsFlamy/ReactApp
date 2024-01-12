import React, { useContext, useEffect, useState } from "react";

import MyInput from "../components/Input/MyInput";
import MyButton from "../components/button/MyButton";
import { AuthContext } from "../context";

import "../scss/general-style.scss";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [userEmail, setUserEmail] =useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if(users.find((user) => user.email === userEmail)) {
      setIsAuth(userEmail);
      localStorage.setItem('auth', userEmail)
    }
  };

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginTop: 70, textAlign: "center" }}>
      <h1>Logowanie</h1>
      <form onSubmit={handleLogin} className="form__login">
        <MyInput type="email" placeholder="Email" onChange={(e) => {
          setUserEmail(e.target.value)
        }} />
        <MyButton>Zaloguj</MyButton>
      </form>
    </div>
  );
};

export default Login;
