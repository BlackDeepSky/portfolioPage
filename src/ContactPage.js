import React from 'react';
import s from './ContactPage.module.css';

class ContactPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper} id='contactPage'>
                <div className={s.mainContactPage}>
                    <div className={s.contactText}>Контакты|Contacts</div>
                        <div className={s.mainContactText}>
                            <input placeholder="This is your name" type="text"/>
                            <input placeholder="This is your phone" type="text"/>
                            <textarea placeholder="This is your message" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                            <div className={s.contactButton}>
                                <button><span></span><span></span><span></span><span></span>Отправить</button>
                            </div>
                        </div>
                    </div>
                    )
                    }
                    }

export default ContactPage;