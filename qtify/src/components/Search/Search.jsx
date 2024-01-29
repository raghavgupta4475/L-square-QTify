import React from 'react'
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import styles from "./Search.module.css"


const Search = ({ placeholder }) => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form className={styles.wrapper} action="submit" onSubmit={onSubmitHandler}>
            <input className={styles.search} type="text" placeholder={placeholder} required />
            <button type='submit' className={styles.searchButton}>
                <SearchIcon />
            </button>
        </form>
    )
}

export default Search