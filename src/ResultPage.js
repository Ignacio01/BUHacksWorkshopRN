import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button, ListView } from 'react-native';


class ResultPage extends Component {


  /**
   * First step: Design
   *   - Create a View container
   *   - Create the title view and then the answer view
   *
   * Second step: Answers algorithm
   *   - Create a answerAlgorithm function
   *      * An function comparing for each question, if the user answer and the correct answer are equivalent
   *   - Display the result of this function
   *
   */


  render() {
    return (
      <View style={styles.containerFlex}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
            {'Results'}
          </Text>
        </View>
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>
            {'Well done! \n You got ' + this.answerAlgorithm() + ' right answers out of ' + this.props.navigation.state.params.answers.length + ' questions!'}
          </Text>
        </View>
      </View>
    )
  }

  answerAlgorithm(){
    //Creating a var counting the number of good answers
    var goodAnswers = 0
    //Iterating through every answer of the answer array
    for (var i = 0; i < this.props.navigation.state.params.answers.length; i++){
      //Checking if the user answer and the correct answer are equivalent
      if (this.props.navigation.state.params.answers[i] == this.props.navigation.state.params.correctAnswers[i]){
        //If so, we increment goodAnswers
        goodAnswers++
      }
    }
    //We then return goodAnswers
    return goodAnswers
  }
}


const styles = StyleSheet.create({
  containerFlex: {
    flex: 10,
    borderWidth: 2,
    borderColor: "#dddddd"
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#dddddd'
  },
  answerContainer: {
    flex: 9,
    borderWidth: 2,
    borderColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 22
  },
  answerText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center'
  }
});

export default ResultPage
