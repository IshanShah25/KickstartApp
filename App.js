import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import { LinearGradient } from 'expo';


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

  render () {
    return(
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']}
                style={{ position: 'absolute',left: 0,right: 0,top: 0,height: 300, }}/> 
          <Image style={styles.logo} source={kickstartLogo}/>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#304ffe',
      alignItems: 'center', 
      justifyContent: 'center',
  },
  logo: {
    marginTop: -100,
    marginBottom: 200,
    height: 125,
    width: 125,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  
});

export default App;