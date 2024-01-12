import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/Navbar';
import AddUser from '../../API/AddUser';
import User from '../../API/UserService';
import EditUser from '../../API/EditUser';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email, username) => {

    

    if (!name || !email || !username) {
      alert("Imie, nazwa użytkownika oraz e-mail nie mogą być puste.")
    return;
    }

    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        username: username,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers((users) =>
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditingUserId(id);
    setIsEditing(true);
    setEditedUser(userToEdit);
  };

  const handleUpdate = async (id, updatedUser) => {
    

      setIsEditing(false);
      setEditingUserId(null);
      setEditedUser(null);

      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updatedUser : user))
      );
    }  
  

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingUserId(null);
    setEditedUser(null);
  };

  return (
    <div className="Users">
      <NavBar />
      <AddUser onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {editingUserId === user.id ? (
              <EditUser
                userToEdit={editedUser}
                onCancel={handleCancelEdit}
                onUpdate={(updatedUser) => handleUpdate(user.id, updatedUser)}
              />
            ) : (
              <User
                id={user.id}
                name={user.name}
                email={user.email}
                username={user.username}
                onDelete={onDelete}
                onEdit={() => onEdit(user.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
