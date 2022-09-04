import React, { Component } from 'react';
import Styles from './Card.module.css';
import up from "../images/up.svg"
import down from "../images/down.svg"


// const Card = (props) => {
//     return (
//         <div>
//             <div className={Styles.card}>
//             <img src={props.img} alt="react"/>
//             <p>{props.matn}</p>
//             </div>
//         </div>
//     );
// };

// export default Card;

class Card extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        }
    }

    changeUp = () => {
        this.setState({
            value: this.state.value + 1
            // mohem
        })

    }
    changeDown = () => {
        if (this.state.value > 0) {
            this.setState({
                value: this.state.value - 1

            })
        }
    
    }


    render() {
        // const {gheymat}=this.props;
        // const {value}=this.state
        return (
            <div>
                <div className={Styles.card}>
                    <img src={this.props.img} alt="react" />
                    <p>{this.props.matn}</p>
                    {/* <p>{gheymat} {this.state.value ? `* ${value} = ${Number(gheymat.split(" ")[0]) * value}` : ""}</p> */}
                    <div className={Styles.arrow}>
                        <img src={up} alt="up" onClick={this.changeUp} />
                        <p>{this.state.value}</p>
                        <img className={this.state.value ? "": Styles.deactive} src={down} alt="up" onClick={this.changeDown} />
                        {/* nahve className dadan be img 
                        className={!this.state.value && Styles.deactive}
                        یا بصورت بالا 
                        */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;