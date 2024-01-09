import React from 'react';
import './myButton.scss';

const MyButton = ({children,...props}) => {
    return (
        <button 
            className='myBtn myBtn__post'
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;