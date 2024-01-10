import React from 'react';
import './pagination.scss';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="pagination">
            {pagesArray.map(p => 
                <span
                    key={p}
                    className={page === p ? 'pagination__block pagination__block-active' : 'pagination__block'}
                    onClick={() => changePage(p)}
                >
                    {p}
                </span>
            )} 
        </div>
    );
};

export default Pagination;