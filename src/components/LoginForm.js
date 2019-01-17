import React, { Component } from 'react';
import { Card, CardSection, Input, } from './common';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged } from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }



    render() {
        return(
            <View style={styles.container}>
                <Card style={styles.cards}>
                    <CardSection>
                        <Input 
                            label="Email"
                            placeholder= "user@email.com"
                            onChangeText={this.onEmailChange.bind(this)}
                        />

                    </CardSection>
                        
                    <CardSection>
                        <Input 
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                        />

                    </CardSection>

                </Card>
                
                <Button style={styles.logoutbutton}>
                   <Text style={styles.buttonText}> Login/Register </Text>
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
        flex: .29,
    },

    cards:{
        backgroundColor: '#fff',
    },

});

export default connect (null, { emailChanged })(LoginForm);