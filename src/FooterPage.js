import React from 'react';
import s from './FooterPage.module.css';

class FooterPage extends React.Component {

    state = {
        icons: [
            "https://img.icons8.com/color/40/000000/github--v1.png",
            "https://img.icons8.com/color/40/000000/linkedin.png",
            "https://img.icons8.com/color/40/000000/telegram-app.png",
            "https://img.icons8.com/officel/40/000000/instagram.png",
        ],
        links: ['https://github.com/BlackDeepSky','https://linkedin.com/in/александр-калелов-88aaba17a/','https://web.telegram.org/@AlexTizer','https://www.instagram.com/alex_tizer/']
    };

    render = () => {
        let iconsArray = this.state.icons.map((i,index) => <a href={this.state.links[index]}><span><img src={i}/></span></a>);
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