import React from 'react';
import styles from './HeaderPage.module.css';

class HeaderButton extends React.Component{
    render = () => {
        return (

                <div className={styles.mainHeader}>
                    <ul>
                        <li>{this.props.headerButton[0]}</li>
                        <li>{this.props.headerButton[1]}</li>
                        <li>{this.props.headerButton[2]}</li>
                        <li>{this.props.headerButton[3]}</li>
                    </ul>
                </div>

        )
    }
}

export default HeaderButton;