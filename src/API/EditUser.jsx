import React, { useState, useEffect } from 'react';
import './editUser.scss';

const EditUser = ({ userToEdit, onCancel, onUpdate }) => {
  const [updatedUser, setUpdatedUser] = useState({
    name: userToEdit.name,
    username: userToEdit.username,
    email: userToEdit.email,
  });

  useEffect(() => {
    setUpdatedUser({
      name: userToEdit.name,
      username: userToEdit.username,
      email: userToEdit.email,
    });
  }, [userToEdit]);

  const handleInputChange = (e) => {
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedUser);
  };

  return (
    <div className="editUser">
      <form onSubmit={handleOnSubmit}>
        <h3>Edytuj użytkownika</h3>
        <input
          placeholder="Imię"
          name="name"
          value={updatedUser.name}
          onChange={handleInputChange}
        />
        <input
          placeholder="Nazwa użytkownika"
          name="username"
          value={updatedUser.username}
          onChange={handleInputChange}
        />
        <input
          placeholder="E-mail"
          name="email"
          value={updatedUser.email}
          onChange={handleInputChange}
        />
        <button type="submit">Edytuj</button>
        <button onClick={onCancel}>Anuluj</button>
        <hr />
      </form>
    </div>
  );
};

export default EditUser;
