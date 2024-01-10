import React from 'react';
import './myInput.scss';

const MyInput = ({...props}) => {
    return (
        <input type='text' className='myInput' {...props} />
    );
};

export default MyInput;