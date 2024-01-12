import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '../../API/PostService';
import Loader from '../../components/loader/Loader';
import { useFething } from '../../hook/useFething';

import './postIdPage.scss';


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState(null);

    const [fetchPostById, isLoading, error] = useFething(async (id) => {
        const responce = await PostService.getById(id);
        setPost(responce.data);
    });

    const [fetchComments, isComLoading, comError] = useFething(async (id) => {
        const responce = await PostService.getCommentsByPostId(id);
        setComments(responce.data);
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('auth');
  console.log('Stored user:', storedUser);

  if (storedUser) {
    setUser({ email: storedUser });
  }
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [params.id]);

    return (
        <div className='postId'>
            {user && <div>Zalgowany jako: {user.email}</div>}
            <hr style={{margin: '45px 0 15px 0'}} />
            
            <div className='postId__title-id'>Post o ID = {params.id}</div>
            {isLoading 
                ?
                    <Loader />
                :
                    <div className='postId__title'><span>{post.id}</span>. {post.title}</div>
            }
            <h1>
                Komentarze
            </h1>
            {isComLoading
                ? 
                    <Loader/>
                : 
                    <div>
                        {comments.map(comm =>
                            <div key={comm.id} className='postId__item'>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
            }
            

        </div>
    );
};

export default PostIdPage;