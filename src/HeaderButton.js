import React from 'react';
import s from './HeaderPage.module.css';


class HeaderButton extends React.Component{

    state = {
        headerButtons: [
            "Main",
            "Skills",
            "Works",
            "Contacts"
        ],
        links: ['#headerPage', '#mainPage', '#myWorksPage', '#contactPage'],
        activeButton: true
    };

    activationButton = () => {
        this.state.activeButton ? this.setState({activeButton: false}) : this.setState({activeButton: true});
    };

    render = () => {
        let headerButtons = this.state.headerButtons.map((b, index) => <a href={this.state.links[index]} onClick={()=>this.activationButton()}><li>{b}</li></a>);
        return (

                <div className={s.mainHeader}>
                    <div className={s.burgerWrapper}
                         onClick={()=>{this.activationButton()}}>
                        <span className={this.state.activeButton?s.burgerMenu:`${s.burgerMenu} ${s.active}`}/>
                    </div>
                    <ul className={this.state.activeButton?s.styleHeaderButtons:`${s.styleHeaderButtons} ${s.visible}`}>
                        {headerButtons}
                    </ul>
                </div>
        )
    }
}

export default HeaderButton;