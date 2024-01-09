import React from 'react';
import './myModal.scss';
const classes = 'myModal';
const classesActive = 'myModal myModal__active';
const modalContentHide = 'myModal__content';
const modalContentShow = 'myModal__content myModal__content-active';

const MyModal = ({children, visible, setVisible}) => {
    return (
        <div 
            className={visible ? classesActive : classes}
            onClick={() => setVisible(false)}
        >
            <div 
                className={visible ? modalContentShow : modalContentHide}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;