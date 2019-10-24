import React from 'react';
import s from './FooterPage.module.css';

class FooterPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper}>
                <div className={s.mainFooterPage}>
                    <div className={s.footerName}>Александр Калелов</div>
                    <div className={s.footerIcons}>
                        <span><img src="https://img.icons8.com/color/50/000000/github--v1.png"/></span>
                        <span><img src="https://img.icons8.com/metro/50/000000/linkedin.png"/></span>
                        <span><img src="https://img.icons8.com/ios-filled/50/000000/vk-circled.png"/></span>
                        <span><img src="https://img.icons8.com/color/50/000000/telegram-app.png"/></span>
                        <span><img src="https://img.icons8.com/officel/50/000000/instagram.png"/></span>
                    </div>
                    <div className={s.footerInc}>2019. Все права защищены</div>
                        </div>
                    </div>
                    )
                    }
                    }

export default FooterPage;