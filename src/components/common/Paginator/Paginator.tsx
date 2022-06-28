import React, {useState} from 'react';
import styles from "./Paginator.module.css";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize?: any
}

const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let portionSize = 10

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.pagination}>
            { portionNumber > 1 &&
            <button onClick = {() => { setPortionNumber(portionNumber - 1)}}>PREV</button> }

            {
                pages
                    .filter(p => p >= leftPortionPageNumber &&  p<= rightPortionPageNumber)
                    .map((p) => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""}
                                 onClick={() => props.onPageChanged(p)}>{p} </span>
                })
            }

            { portionCount > portionNumber &&
                <button onClick = {() => { setPortionNumber(portionNumber + 1)}}>NEXT</button> }

        </div>
    );
};

export default Paginator;