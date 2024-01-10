import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';

import './navbar.scss';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            <div className="navbar__container navbar__container-flex">
                <div className="navbar__title">SocialConnect</div>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to='/about' className="navbar__link">Strona</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/posts' className="navbar__link">Posty</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/users' className="navbar__link">Użytkownicy</Link>
                    </li>
                </ul>
                {isAuth && <MyButton onClick={logout}>Wyloguj</MyButton>}
            </div>
        </div>
    );
};

export default Navbar;