import React from 'react';
import s from './MainPage.module.css';

class MainPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper}>
                <div className={s.mainPage}>

                    <div className={s.mySkills}>
                        <p>Мои скиллы | My skills</p>
                    </div>
                    <div className={s.mainContent}>
                        <div className={s.myProject1}>
                            <img src="http://blog.polycreative.ru/wp-content/uploads/2017/03/badges_intro_to_html_css_stage-01.png" alt=""/>
                        </div>

                        <div className={s.myProject2}>
                            <img src="https://habrastorage.org/webt/-x/wz/1q/-xwz1qhhii41hhty1yq8dpqlvtc.png" alt=""/>
                        </div>
                        <div className={s.myProject3}>
                            <img src="https://itproger.com/img/courses/1476977754.jpg" alt=""/>
                        </div>

                        <div className={s.myProject4}>
                            <div></div>
                            <p>React</p>
                        </div>
                        <div className={s.myProject5}>
                            <p>Подробное описание навыка</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage;