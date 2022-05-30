import React, {useState} from 'react';
import css from './TopSort.module.css'
import classNames from "classnames";

const sortOptions = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']

const ItemSort = ({text, setSort, sort, left, right, center}) => {
    const sortItem = classNames(css.itemSort , {
        [ css.selectItem ]: sort === text,
        [ css.rightBorder ]: right,
        [ css.leftBorder ]: left,
        [ css.leftBord ]: center && sort===sortOptions[2],
        [ css.rightBord ]: center && sort===sortOptions[0],
    })
    return (
        <div className={sortItem} onClick={() => setSort(text)}>
            <span>{text}</span>
        </div>
    )
}


const TopSort = () => {

    const [ sort, setSort ] = useState(sortOptions[0])

    return (
        <div className={css.root}>
            <ItemSort text={sortOptions[0]} setSort={setSort} sort={sort} left/>
            <ItemSort text={sortOptions[1]} setSort={setSort} sort={sort} center/>
            <ItemSort text={sortOptions[2]} setSort={setSort} sort={sort} right/>
        </div>
    );
};

export default TopSort;