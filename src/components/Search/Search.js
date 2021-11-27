import React from 'react';
import styles from './Search.module.scss';

const Search = ({setSearch, setPageNumber}) => {

    const searchBtn = (e) =>{
        e.preventDefault();
    }
    return (
        <form
        className={`${styles.search} d-flex flex-row align-items-center justify-content-center gap-4 mb-5`}>
            <input type="text" 
                 placeholder="Search for Characters"
                 className={`${styles.input}`}
                 onChange={(e) => {setPageNumber(1); 
                                   setSearch(e.target.value)
                                   }}/>
             <button onClick={(e) => searchBtn(e)} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
            
        </form>
    )
}

export default Search
