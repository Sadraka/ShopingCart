import React, { Component } from 'react';
import Styles from "./Searchbox.module.css"



// const Searchbox = () => {
//     return (
//         <div className={Styles.box}>
//             <h1>جستجو</h1>
//             <input type="text" placeholder="هر چه می‌خواهی بنویس"/>
//         </div>
//     );
// };

// export default Searchbox;

class Searchbox extends Component {
    constructor(){
        super();
        this.state={
            input:"",
        }
    }
    
    inputChange = event =>{
        this.setState({
            input:event.target.value
        })
        
    }


    render() {
        const {input} = this.state;
        return (
            
        <div className={Styles.box}>
            <h1>جستجو</h1>
            <div className={Styles.input}>
            <input type="text" placeholder="هر چه می‌خواهی بنویس" value={input} onChange={this.inputChange}/>
            <span>{input}</span>
            </div>
        </div>
        );
    }
}

export default Searchbox;