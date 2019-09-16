import React from 'react';
import styles from './HeaderPage.module.css';

class HeaderPage extends React.Component{
    render = () => {
        return (
            <div className={styles.mainWrapper}>
                <div className={styles.mainHeader}>
                    <ul>
                        <li>Главная | Main</li>
                        <li>Скилы | Skills</li>
                        <li>Работы | Works</li>
                        <li>Контакты | Contacts</li>
                    </ul>
                </div>

                <div className={styles.mainContent}>

                    <div className={styles.profileName}>
                        <p>Привет!<br></br>Меня зовут <span>Александр Калелов!</span><br></br>Я <span>Front-End</span> разработчик</p>
                    </div>
                    <div className={styles.profileImg}>
                    <img  src="5-124.muj-avatar.png"/>
                    </div>
                </div>


            </div>

        )
    }
}

export default HeaderPage;