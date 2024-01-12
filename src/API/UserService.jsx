import React from 'react';
import './user.scss';



const User = ({id,email,name,username,onDelete,onEdit}) => {

    

    const handleDelete = () => {
        onDelete(id);
      };
    
      const handleEdit = () => {
        onEdit(id);
      };
    
      
    return (
        <div className='userslist'>
          
            <div className='list'>
              <span>Imie: {name}</span>
              <span>Nazwa użytkownika: {username}</span>
              <span type="email">Email: {email}</span>
              <span>
                <button onClick={handleEdit}>Edytuj</button>
                <button onClick={handleDelete}>Usuń</button>
              </span>
            </div>
        </div>
      );
}

export default User;