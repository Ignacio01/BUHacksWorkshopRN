import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';

class QuestionPages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text> Questions Page </Text>
      </View>
    )
  }
}


export default QuestionPages
