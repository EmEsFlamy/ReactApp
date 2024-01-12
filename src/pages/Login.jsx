import React, { useContext, useEffect, useState } from "react";

import MyInput from "../components/Input/MyInput";
import MyButton from "../components/button/MyButton";
import { AuthContext } from "../context";

import "../scss/general-style.scss";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === userEmail);

    if (user) {
      setIsAuth(userEmail);
      localStorage.setItem("auth", JSON.stringify(userEmail));
      setLoginError(false); 
    } else {
      setLoginError(true); 
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
        <MyInput
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUserEmail(e.target.value);
            setLoginError(false); 
          }}
        />
        {loginError && <p style={{ color: "red" }}>Niepoprawny e-mail.</p>}
        <MyButton>Zaloguj</MyButton>
        
      </form>
    </div>
  );
};

export default Login;
