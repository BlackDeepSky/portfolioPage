import React from 'react';
import "./App.css";
import HeaderPage from "./HeaderPage";
import MainPage from "./MainPage";
import MyWorksPage from "./MyWorksPage";
import InfoPage from "./InfoPage";
import ContactPage from "./ContactPage";
import FooterPage from "./FooterPage";
import Particles from 'react-particles-js';
import particle from './particle';


class App extends React.Component {
 state = {
     name: "Alexander Kalelov",
    };
nameRename = (attr) => {
   let nameBest = [...this.state.name, ` \{${attr}\}`];
    this.setState({
        name: nameBest
    })
};

    render = () => {
        return (
            <div>
                <HeaderPage name={this.state.name}/>
                <Particles className={'particles'} params={particle}/>
                <MainPage/>
                <MyWorksPage/>
                <InfoPage nameRename={this.nameRename}/>
                <ContactPage/>
                <FooterPage/>
            </div>
        )
    }
}

export default App;
