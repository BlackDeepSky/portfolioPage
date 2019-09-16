import React from 'react';
import s from './ContactPage.module.css';

class ContactPage extends React.Component {
    render = () => {
        return (
            <div className={s.mainWrapper}>
                <div className={s.mainContactPage}>
                    <div className={s.contactText}>Контакты|Contacts</div>
                        <div className={s.mainContactText}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisici</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisici</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur
                                distinctio eos est fuga porro quae quis rerum. Aut eos exercitationem ipsam ipsum
                                nam officia omnis quidem reiciendis sunt voluptatum.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur
                                distinctio eos est fuga porro quae quis rerum. Aut eos exercitationem ipsam ipsum
                                nam officia omnis quidem reiciendis sunt voluptatum.</p>
                        </div>
                            <div className={s.contactButton}>
                                <button>Отправить</button>
                            </div>
                        </div>
                    </div>
                    )
                    }
                    }

export default ContactPage;