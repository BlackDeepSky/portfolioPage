import React from 'react';
import s from './FooterPage.module.css';

class FooterPage extends React.Component {
    render = () => {
        let iconImage = ['text','notext','afaf'].map(m => <span>{m}</span>);
        return (
            <div className={s.mainWrapper}>
                <div className={s.mainFooterPage}>
                    <div className={s.footerName}>Александр Калелов</div>
                    <div className={s.footerIcons}>
                        {iconImage}
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={s.footerInc}>2019. Все права защищены</div>
                        </div>
                    </div>
                    )
                    }
                    }

export default FooterPage;