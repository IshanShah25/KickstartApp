import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import { LinearGradient } from 'expo';
import Router from './src/router';


var kickstartLogo = require('./assets/kickstartLogo.png');


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBSZnxwlC0Gea6eeDpKzXLK4e5DxJXxOLI',
      authDomain: 'kickstart-f74e6.firebaseapp.com',
      databaseURL: 'https://kickstart-f74e6.firebaseio.com',
      projectId: 'kickstart-f74e6',
      storageBucket: 'kickstart-f74e6.appspot.com',
      messagingSenderId: '677545288579'
    };
    firebase.initializeApp(config);
  }
render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;