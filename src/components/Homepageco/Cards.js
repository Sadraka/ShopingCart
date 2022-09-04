import React, { Component } from 'react';
import Card from "./Card";
import Pngreact from "../images/reactjs.png";
import Pngnodejs from "../images/nodejs_logo.png";
import Pngangularjs from "../images/AngularJS-Icon.png";
import Pngvue from "../images/Logo-Vuejs.png";
import Styles from "./Cards.module.css";

// const Cards = () => {
//     return (
//         <div className={Styles.cards}>
//             <Card gheymat="400 تومان" img={Pngreact} matn={`React کتاب خانه‌ای‌از جاوا اسکریپت `} />
//             <Card gheymat="300 تومان" img={Pngnodejs} matn="Nodejs موتور جاوا اسکریپت" />
//             <Card gheymat="200 تومان" img={Pngangularjs} matn="Angular فریم‌ورک جاوا اسکریپت " />
//             <Card gheymat="250 تومان" img={Pngvue} matn="Vuejs فریم‌ورک جاوا اسکریپت" />
//         </div>
//     );
// };

// export default Cards;

class Cards extends Component {
    constructor(){
        super()
        this.state={
            myArray:[
                {img:Pngreact , gheymat:"400 تومان",matn:"React کتاب خانه‌ای‌از جاوا اسکریپت" },
                {img:Pngnodejs , gheymat:"300 تومان",matn:"Nodejs موتور جاوا اسکریپت" },
                {img:Pngangularjs , gheymat:"200 تومان",matn:"Angular فریم‌ورک جاوا اسکریپت " },
                {img:Pngvue , gheymat:"250 تومان",matn:"Vuejs فریم‌ورک جاوا اسکریپت" }
                // mohem
            ]

        }
    }





    render() {
        return (
            <div className={Styles.cards}>
                    {this.state.myArray.map(value => <Card key={value.matn} gheymat={value.gheymat} img={value.img} matn={value.matn}/> )}    
            </div>
        );
    }
}

export default Cards;