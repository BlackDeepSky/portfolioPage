import React from 'react';
import s from './InfoPage.module.css';

class InfoPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper}>
                <div className={s.InfoPage}>
                <div className={s.infoPageText}>Рассматриваю варианты удалённой работы</div>
                <div className={s.infoPageButton}><button>Нанять меня</button></div>
                </div>
            </div>
        )
    }
}

export default InfoPage;