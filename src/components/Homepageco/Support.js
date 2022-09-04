import React from 'react';
import Styles from "./Support.module.css"
import Pngreact from "../images/reactjs.png"
import Pngnodejs from "../images/nodejs_logo.png"
const support = () => {
    return (
        <div className={Styles.support}>
            <div className={Styles.h}>
                <h1>دوره ها </h1>
            </div>
            <div className={Styles.img}>
                <img src={Pngreact} alt="React" />
                <img src={Pngnodejs} alt="NodeJs" />
            </div>
        </div>
    );
};

export default support;