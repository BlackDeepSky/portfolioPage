import React from 'react';
import s from './MainPage.module.css';
import Skill from './Skill';
import jsLogo from './img/js-logo.png';
import reactLogo from './img/pngguru.com.png';
import webLogo from './img/css-and-html.png';
import reduxLogo from './img/redux.png';

class MainPage extends React.Component {

    render = () => {
        return (
            <div className={s.mainWrapper} id='mainPage'>
                <div className={s.mainPage}>

                    <div className={s.mySkills}>
                        <p>Мои скиллы | My skills</p>
                    </div>
                    <div className={s.mainContent}>
                   <Skill name='Javascript' img={jsLogo}/>
                   <Skill name='React' img={reactLogo}/>
                   <Skill name='Css3 and HTML5' img={webLogo}/>
                   <Skill name='Redux' img={reduxLogo}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage;