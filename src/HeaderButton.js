import React from 'react';
import styles from './HeaderPage.module.css';

class HeaderButton extends React.Component{
    render = () => {
        let headerButtons = this.props.headerButton.map(b => <li>{b}</li>);
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