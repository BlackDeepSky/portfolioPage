import React from 'react';
import HeaderButton from "./HeaderButton";
import styles from './HeaderPage.module.css';
import avatarImg from './img/avatar.jpg';
import particle from './particle';
import Particles from "react-particles-js";


class HeaderPage extends React.Component {
    render = () => {
        return (
            <div className={styles.mainWrapper} id='headerPage'>
                <HeaderButton/>
                <div className={styles.mainContent}>
                    <div className={styles.profileName}>
                        <p>Hi!<br></br>I am  <span>{this.props.name}</span><br></br>
                            I <span>Front-End</span> developer</p>
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