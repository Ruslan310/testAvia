import React from 'react';
import css from './header.module.css'
import classNames from "classnames";

import logo from './img/Logo.svg'

const Header = ({ img, style }) => {

    const rootImg = img || logo
    const rootStyle = classNames(style, css.root)

    return (
        <div className={rootStyle}>
            <img className={css.imgHeader}
                 src={rootImg}
                 alt="headerImg"/>
        </div>
    );
};

export default Header;