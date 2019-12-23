import React from 'react';
import HeaderButton from "./HeaderButton";
import styles from './HeaderPage.module.css';
import avatarImg from './img/avatar.jpg';
import particle from './particle';
import Particles from "react-particles-js";


class HeaderPage extends React.Component {
    state = {
        display: 'none'
    };
    hiddenDisplay = (attr) => {
        if(this.state.display === 'none'){
            this.setState({
                display: ''
            })
        }else this.setState({
            display: 'none'
        })
    };
    render = () => {
        return (
            <div className={styles.mainWrapper} id='headerPage'>

                <HeaderButton display={this.hiddenDisplay}/>
                <div className={styles.mainContent}>
                    <div className={styles.mainBurgerMenu} style={{display: this.state.display}}><HeaderButton display={this.hiddenDisplay}/></div>
                    <div className={styles.profileName}>
                        <p>Hi!<br></br>I am  <span>{this.props.name}</span><br></br>I <span>Front-End</span> developer</p>
                    </div>
                    <div className={styles.profileImg}>
                        <img src={avatarImg} className={styles.avatarImg}/>
                        <span></span>
                    </div>
                </div>
                <Particles className={'particles'} params={particle}/>
            </div>

        )
    }
}

export default HeaderPage;