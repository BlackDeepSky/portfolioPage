import React from 'react';
import s from './InfoPage.module.css';

class InfoPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper} id='infoPage'>
                <div className={s.InfoPage}>
                <div className={s.infoPageText}>Рассматриваю варианты удалённой работы</div>
                    <div className={s.infoPageButton}><button onClick={()=>{this.props.nameRename("Красавчик!")}}>
                        <span></span><span></span><span></span><span></span>Нанять меня</button></div>
                </div>
            </div>
        )
    }
}

export default InfoPage;