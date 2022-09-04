import React from 'react';
import Styles from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={Styles.main}>
            <h1>آموزش برنامه‌نویسی</h1>
            <p>ما در حال آموزش <span>React.js</span> هستیم</p>
        </div>
    );
};

export default Banner;