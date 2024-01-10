import React from "react";
import "./addUser.scss";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value,e.target.username.value);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.username.value= "";
}

  return (
    
    <div className="addUser">
      <form onSubmit={handleOnSubmit}>
        <h3>Dodaj użytkownika</h3>
        <input placeholder="Imie" name="name" />
        <input placeholder="Nazwa użytkownika" name="username" />
        <input placeholder="E-mail" name="email" />
        <button onSubmit={handleOnSubmit}>Dodaj</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;