import React from 'react';
import styles from './HeaderPage.module.css';


class HeaderButton extends React.Component{

    state = {
        headerButtons: [
            "Main",
            "Skills",
            "Works",
            "Contacts"
        ],
        links: ['#headerPage', '#mainPage', '#myWorksPage', '#contactPage']
    };

    render = () => {
        let headerButtons = this.state.headerButtons.map((b, index) => <a href={this.state.links[index]}><li>{b}</li></a>);
        return (

                <div className={styles.mainHeader}>
                    <ul>
                        {headerButtons}
                    </ul>
                </div>
        )
    }
}

export default HeaderButton;