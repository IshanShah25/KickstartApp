import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import { TextInput, View, Text} from 'react-native';
import LoginForm from './components/LoginForm';
import Home from './components/Home';



const RouterComponent = () => {
    return (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth" hideNavBar={true}>
                <Scene key="login" component={LoginForm} hideNavBar={true} initial />
            </Scene>
            <Scene key="main" >
                <Scene
                    hideBackImage
                    hideNavBar={false}
                    onLeft={() => Actions.auth()}
                    leftTitle="Log Out"
                    key="home"
                    component={Home}
                    title="Home" />
                </Scene>
            </Scene>
    </Router>
       
    );
};


export default RouterComponent;