import React from 'react';
import HeaderPage from "./HeaderPage";
import MainPage from "./MainPage";
import MyWorksPage from "./MyWorksPage";
import InfoPage from "./InfoPage";
import ContactPage from "./ContactPage";
import FooterPage from "./FooterPage";


class App extends React.Component {
 state = {
    headerButton:[
        "Главная | Main",
        "Скилы | Skills",
        "Работы | Works",
        "Контакты | Contacts"
    ],
     name: "Александр Калелов"
    };
nameRename = (attr) => {
   let nameBest = [...this.state.name, ` \{${attr}\}`];
    this.setState({
        name: nameBest
    })
};
    render = () => {
        return (
            <div className="App">
                <HeaderPage headerButton={this.state.headerButton} name={this.state.name}/>
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
