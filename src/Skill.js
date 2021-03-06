import React from 'react';
import s from './MainPage.module.css';

class Skill extends React.Component {
    render = () => {
        return (
                    <div className={s.skills}>
                        <div className={s.skillsLogo}><img src={this.props.img}/></div>
                        <div className={s.skillsName}><h3>{this.props.name}</h3></div>
                        <div className={s.skillsDescription}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Blanditiis deleniti eveniet
                            obcaecati optio qui sapiente veniam! Expedita explicabo.</div>
                    </div>
        )
    }
}

export default Skill;