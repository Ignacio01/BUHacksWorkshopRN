/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import QuestionPages from './src/QuestionPages.js';
import ResultPage from './src/ResultPage.js'

class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcomeText}>Welcome to the OpenWeb Quiz!</Text>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Go to the Quiz!" onPress={() => this.props.navigation.navigate('Question')}/>
        </View>
      </View>
    );
  }
}

export const RootNavigator = StackNavigator({
  Home: {
    screen: App,
  },
  Question: {
    screen: QuestionPages,
  },
  Result: {
    screen: ResultPage
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonStyle: {
    marginTop: 10,

  },
});

export default RootNavigator
