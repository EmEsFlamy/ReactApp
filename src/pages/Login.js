import React, { useContext } from 'react';

import MyInput from '../components/Input/MyInput';
import MyButton from '../components/button/MyButton';
import { AuthContext } from '../context';

import '../scss/general-style.scss';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true'); 
    };

    return (
        <div style={{marginTop: 70, textAlign: 'center'}}>

            <h1>Logowanie</h1>
            <form 
                onSubmit={login} 
                className='form__login'
                >
                <MyInput type='text' placeholder='Login' />
                <MyInput type='password' placeholder='Hasło' />
                <MyButton>Zaloguj</MyButton>
            </form>
        </div>
    );
};

export default Login;