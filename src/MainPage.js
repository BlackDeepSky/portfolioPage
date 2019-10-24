import React from 'react';
import s from './MainPage.module.css';
import Skill from './Skill';

class MainPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper}>
                <div className={s.mainPage}>

                    <div className={s.mySkills}>
                        <p>Мои скиллы | My skills</p>
                    </div>
                    <div className={s.mainContent}>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                   <Skill/>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage;