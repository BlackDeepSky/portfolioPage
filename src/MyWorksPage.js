import React from 'react';
import s from './MyWorksPage.module.css';

class MyWorksPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper} id='myWorksPage'>
                <div className={s.mainContainer}>

                <div className={s.myWorks}> Мои работы| My works</div>

                <div className={s.myWorksContainer}>
                    <div className={s.project}>
                    <div className={s.myWorksSlide}>
                        <button className={s.myWorksSlideClick}><span></span><span></span><span></span><span></span>Смотреть</button>
                        <img src='https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?my-first-react-project-c8b42.firebaseapp.com'/>
                    </div>
                    <div className={s.myWorksUnderSlide}>
                        <p>Название проекта</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias beatae, consectetur dolore doloribus expedita fugit mollitia,
                            obcaecati, officia quidem vitae voluptatem voluptatibus.
                            Blanditiis dolorem earum eveniet illum itaque labore numquam!</p>
                    </div>
                    </div>

                    <div className={s.project}>
                        <div className={s.myWorksSlide}>
                            <a href="https://my-counter-40b30.firebaseapp.com/"><button className={s.myWorksSlideClick}><span></span><span></span><span></span><span></span>Смотреть</button></a>
                            <img src="https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?https%3A%2F%2Fmy-counter-40b30.firebaseapp.com%2F"/>
                        </div>
                        <div className={s.myWorksUnderSlide}>
                            <p>Название проекта</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Alias beatae, consectetur dolore doloribus expedita fugit mollitia,
                                obcaecati, officia quidem vitae voluptatem voluptatibus.
                                Blanditiis dolorem earum eveniet illum itaque labore numquam!</p>
                        </div>
                    </div>

                    <div className={s.project}>
                    <div className={s.myWorksSlide}>
                        <a href='https://my-calculate-626ce.firebaseapp.com/'><button className={s.myWorksSlideClick}><span></span><span></span><span></span><span></span>Смотреть</button></a>
                        <img src="https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?https%3A%2F%2Fmy-calculate-626ce.firebaseapp.com%2F"/>
                    </div>
                    <div className={s.myWorksUnderSlide}>
                        <p>Название проекта</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias beatae, consectetur dolore doloribus expedita fugit mollitia,
                            obcaecati, officia quidem vitae voluptatem voluptatibus.
                            Blanditiis dolorem earum eveniet illum itaque labore numquam!</p>
                    </div>
                    </div>

                </div>

                </div>
            </div>
        )
    }
}

export default MyWorksPage;