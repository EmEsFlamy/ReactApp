import React, { useEffect, useRef, useState } from 'react';
import PostList from '../components/postList/PostList';
import PostForm from '../components/postForm/PostForm';
import PostFilter from '../components/postFilter/PostFilter';
import MyModal from '../components/modal/MyModal';
import { usePosts } from '../hook/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/loader/Loader';
import { useFething } from '../hook/useFething';
import { getPageCount, getPagesArray } from '../utils/pages';
import NavBar from '../components/navbar/Navbar';

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0); 	
	const [limit, setLimit] = useState(10);				
	const [page, setPage] = useState(1);				
	const lastElement = useRef();						
	const observer = useRef();							
	

	const [fetchPosts, isPostLoading, postError] = useFething(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
			setPosts([...posts, ...response.data]);
			const totalCount = response.headers['x-total-count']; 
			setTotalPages(getPageCount(totalCount, limit));
	});

	useEffect(() => {
		if (isPostLoading) return;
		if (observer.current) observer.current.disconnect();
		let callback = function(entries, observer) {
			if (entries[0].isIntersecting && page < totalPages) {
				
				setPage(page + 1);
			}
			

		}
		observer.current = new IntersectionObserver(callback);
		observer.current.observe(lastElement.current);
	}, [isPostLoading]);

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

	const createPost = (newPost) => {   
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (post) => {		
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); 

	return (
		<div className='app'>
			<NavBar />
			<MyModal visible={modal} setVisible={setModal} >
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{margin: '65px 0 23px 0'}} />
			<h1 style={{textAlign: 'center', marginBottom: '20px'}}>Posty użytkowników</h1>
			<PostFilter 
				filter={filter}
				setFilter={setFilter}
				setModal={setModal}
			/>
			{ postError && <div>Wystąpił błąd ${postError}</div> }
			<PostList remove={removePost} posts={sortedAndSearchedPosts} />	
			<div ref={lastElement}></div>
			{isPostLoading && <Loader />}
		</div>
	);
};

export default Posts;