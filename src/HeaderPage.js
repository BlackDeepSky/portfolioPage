import React from 'react';
import HeaderButton from "./HeaderButton";
import styles from './HeaderPage.module.css';

class HeaderPage extends React.Component {
    render = () => {
        return (
            <div className={styles.mainWrapper}>

                <HeaderButton headerButton={this.props.headerButton}/>

                <div className={styles.mainContent}>

                    <div className={styles.profileName}>
                        <p>Привет!<br></br>Меня
                            зовут <span>{this.props.name}</span><br></br>Я <span>Front-End</span> разработчик</p>
                    </div>
                    <div className={styles.profileImg}>
                        <img src="5-124.muj-avatar.png"/>
                    </div>
                </div>


            </div>

        )
    }
}

export default HeaderPage;