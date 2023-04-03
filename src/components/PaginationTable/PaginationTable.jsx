import React from 'react';

import "./PaginationTable.scss";

const PaginationTable = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className="PaginationTable">
            {
                pages.map((page, i) => {
                    return <button key={i} onClick={() => setCurrentPage(page)} className={`PaginationTable-btn ${page === currentPage ? "active" : ""}`}>{page}</button>
                })
            }
        </div>
    )
}

export default PaginationTable;
