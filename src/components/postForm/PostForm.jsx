import React from 'react';
import { useState } from 'react';

import MyButton from '../button/MyButton';
import MyInput from '../Input/MyInput';

import './postForm.scss';
import TextAreaInput from '../textAreaInput/TextAreaInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const [error, setError] = useState('');
    

    

	const addNewPost = (e) => {
		e.preventDefault();
        if (!post.title || !post.body) {
            setError('Both title and body are required.');
            return;
          }
        const newPost = {...post, id: Date.now()};
		create(newPost);
        setPost({title: '', body: ''}); 
        setError('');  
	}

	const onChangleInputTitle = (e) => {
		setPost({...post, title: e.target.value});
	}

	const onChangleInputBody = (e) => {
		setPost({...post, body: e.target.value});
	}
    return (
        <form className='form'>
            <MyInput 
                className='form__input'
                value={post.title} 
                onChange={e => onChangleInputTitle(e)}
                placeholder='Tytuł posta' />
            <TextAreaInput
                readOnly={false}
                className='form__input'
                value={post.body}
                onChange={e => onChangleInputBody(e)}
                placeholder='Opis'/>
                {error && <div className='error-message'>{error}</div>}
            <MyButton
                className='myBtn myBtn__big'
                onClick={e => addNewPost(e)}>Opublikuj</MyButton>
        </form>
    );
};

export default PostForm;