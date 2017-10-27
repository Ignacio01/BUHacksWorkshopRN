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


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component<{}> {
  render() {
    return (
      <View>
        <View>
          <Text>Welcome to the OpenWeb Quiz!</Text>
        </View>
        <View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default RootNavigator
