import React, { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Postitem from '../postItem/Postitem';

const PostList = ({posts, remove}) => {
    const nodeRef = useRef(null);
    return (
        <>
            {!posts.length
                ? 
                    <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>
                        Nie znaleziono postów
                    </div>
                :
                    <ul className='post'>
                        <TransitionGroup>
                            {posts.map((post, i) => 
                                <CSSTransition
                                    key={post.id}
                                    timeout={500}
                                    classNames='item'
                                    nodeRef={nodeRef}
                                >
                                    <Postitem remove={remove} number={i + 1} post={post} key={post.id} />
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                        
                    </ul>
            }
            
        </>   
    );
};

export default PostList;