import React from 'react';
import './Paginator.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="pageBar">
            {pages.map((p) => {
                return <span key={p} className={props.currentPage === p ? "selectedPage" : ""}
                             onClick={() => {
                                 props.setCurrentPage(p, props.pageSize)
                             }}
                >{p}</span>
            })}
        </div>
    )
};

export default Paginator;