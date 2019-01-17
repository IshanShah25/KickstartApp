import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#448aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '##448aff',
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#448aff',
    width: 370,
    marginTop: 20,
  }
};

export { Button };
