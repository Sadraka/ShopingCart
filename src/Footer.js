import React from 'react';
import Styles from "./Footer.module.css"
const footer = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.footer}>
            <p> ساخته شده با <span>♥</span></p>
            </div>
        </div>
    );
};

export default footer;