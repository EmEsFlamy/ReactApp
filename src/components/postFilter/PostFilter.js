import React from 'react';

import MyInput from '../Input/MyInput';
import MySelect from '../select/MySelect';
import MyButton from '../button/MyButton';

import './postFilter.scss';

const PostFilter = ({filter, setFilter, setModal}) => {
    return (
        <div className='filter'>
            <MyInput 
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder='Szukaj...'
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue='Sortowanie'
				options={[
					{value: 'title', name: 'Wg nazwy'},
					{value: 'body', name: 'Wg opisu'}
				]}
			/>
			<MyButton onClick={() => setModal(true)}>
                    Utwórz post
            </MyButton>
        </div>
    );
};

export default PostFilter;