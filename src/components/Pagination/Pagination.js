import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {
    /* const next = ()=>{
        
        setPageNumber( (prevState) => prevState + 1 )
        
    };
    const prev = () => {
        if(pageNumber === 1 ) return;
        setPageNumber( (prevState) => prevState - 1 )
    }; */
    return (
        
            <ReactPaginate 
            className="pagination justify-content-center gap-4 my-5 text-white"
            forcePage={pageNumber === 1? 0 : pageNumber - 1}
            nextLabel="Next"
            previousLabel="Prev"
            nextClassName="btn btn-primary"
            previousClassName="btn btn-primary"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }}
            pageCount={info?.pages}/>
            
       
    )
}

export default Pagination
