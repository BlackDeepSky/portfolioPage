import React from 'react';
import s from './FooterPage.module.css';

class FooterPage extends React.Component {

    state = {
        icons: [
            "https://img.icons8.com/color/40/000000/github--v1.png",
            "https://img.icons8.com/color/40/000000/linkedin.png",
            "https://img.icons8.com/color/40/000000/vk-circled.png",
            "https://img.icons8.com/color/40/000000/telegram-app.png",
            "https://img.icons8.com/officel/40/000000/instagram.png",
        ]
    };

    render = () => {
        let iconsArray = this.state.icons.map(i => <span><img src={i}/></span>);
        return (
            <div className={s.mainWrapper} id='footerPage'>
                <div className={s.mainFooterPage}>
                    <div className={s.footerName}>Александр Калелов</div>
                    <div className={s.footerIcons}>
                        {iconsArray}
                    </div>
                    <div className={s.footerInc}>2019. Все права защищены</div>
                        </div>
                    </div>
                    )
                    }
                    }

export default FooterPage;