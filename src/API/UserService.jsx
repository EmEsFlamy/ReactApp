import React from 'react';
import './user.scss';


const User = ({id,email,name,username,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='userslist'>
            
        <div className='list'>
            <span>Imie: {name}</span>
            <span>Nazwa użytkownika: {username}</span>
            <span>Email: {email}</span>
            <span></span>
            <span>
                <button>Otwórz</button>
                <button>Edytuj</button>
                <button onClick={handleDelete}>Usuń</button>
            </span>
        </div>
        </div>
    )
}

export default User;