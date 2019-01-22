import React, { Component } from 'react';
import { Card, CardSection, Input, Spinner } from './common';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Actions } from 'react-native-router-flux';


var kickstartLogo = require('../../assets/kickstartLogo.png');

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email,password } = this.props;

        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (

            <Button onPress={this.onButtonPress.bind(this)} style={styles.logoutbutton}>
            <Text style={styles.buttonText}> Login/Register </Text>
         </Button>
            
        );
    }

    renderError() {
        if(this.props.error) {
            return(
                <View  >
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']}
                style={{ position: 'absolute',left: 0,right: 0,top: 0,height: 300, }}/> 
                <Image style={styles.logo} source={kickstartLogo}/>
                <Card style={styles.cards}>
                    <CardSection>
                        <Input 
                            label="Email:"
                            placeholder= "user@email.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />

                    </CardSection>
                        
                    <CardSection>
                        <Input 
                            secureTextEntry
                            label="Password:"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />

                    </CardSection>

                </Card>

                {this.renderError()}
                
               
                
                {this.renderButton()}


                <Button style={styles.logoutbutton} onPress={() => Actions.main()}>
                   <Text style={styles.buttonText}> Continue as Guest </Text>
                </Button>

            </View>
        );
    }
}



const styles = StyleSheet.create({
  
     logoutbutton: {
        marginTop: 25,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: '#448aff',
        width: 370,
        alignItems: 'center',
        justifyContent: 'center',
     },
     buttonText: {
        color: 'white',
        fontSize: 18,
      },
    container: {
        flex: 1,
        
        justifyContent: 'center',
        backgroundColor: '#304ffe'

    },

    cards:{
        backgroundColor: '#fff',
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    logo: {
        marginTop: -50,
        marginBottom: 200,
        height: 125,
        width: 125,
        alignItems: 'center',
        resizeMode: 'contain',
        alignSelf: 'center',
      },

});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
  
    return { email, password, error, loading };
  };



export default connect (mapStateToProps, {
     emailChanged,passwordChanged, loginUser
 })(LoginForm);