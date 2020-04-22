import React from 'react';
import s from './HeaderPage.module.css';

export default class BurgerMenu extends React.Component {
   activationButton = () => {
     this.state.activeButton ? this.setState({activeButton: false}) : this.setState({activeButton: true});
    };

   state = {
       activeButton: true
   };

    render = () => {
        return (
            <div className={s.burgerWrapper}
                 onClick={()=>{this.activationButton()}}>
                <span className={this.state.activeButton?s.burgerMenu:`${s.burgerMenu} ${s.active}`}/>
            </div>
        )
    }
}