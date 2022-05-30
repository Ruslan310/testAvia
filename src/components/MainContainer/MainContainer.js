import React from 'react';
import css from './MainContainer.module.css'
import TopSort from "../TopSort/TopSort";
import AviasalesList from "../AviasalesList/AviasalesList";

const MainContainer = () => {

    return (
        <div className={css.root}>
            <TopSort />
            <AviasalesList />
        </div>
    );
};

export default MainContainer;