import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../button/MyButton';
import './postItem.scss';


const Postitem = (props) => {
    const {title, body} = props.post;
    const {number, remove, post} = props;

    const router = useNavigate();
    return (
        <li className="post__item">
            <div className='post__title'>{number}. {title}</div>
            <div className='post__none'>{post.id}</div>
            <div className='post__descr'>
                {body}
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${post.id}`)}>
                    Otwórz
                </MyButton>
                <MyButton onClick={() => remove(post)}>
                    Usuń
                </MyButton>
            </div>
        </li>
    );
};

export default Postitem;