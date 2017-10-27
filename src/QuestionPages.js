import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image, Button } from 'react-native';

const questions = ['Is Citgo a fuel company?', 'Did the Boston red Sox win the World Series in 2013?', 'Is this building a BU building?', 'Is this hockey team better than the BU one?']
const images = ['https://i.imgur.com/25qj1yx.jpg', 'https://i.imgur.com/JSKxx4R.jpg', 'https://i.imgur.com/xOdIv99.jpg', 'https://i.imgur.com/4quhAH6.png']
const correctAnswers = ['Yes', 'Yes', 'Yes', 'No']
var answers = ['', '', '', '']

class QuestionPages extends Component {

  /**
   * First step:
   *  - Initialize the constructor, explaining why we need it
   *      * We need it because we want our view to rerender automatically with the next question each time we press the 'Yes' or 'No' button
   *      * We create a state 'counter', that we will increment each time we push 'Yes' or 'No'
   *      * This will force the screen to rerender, as counter is a state
   *      * We also have to take in case that if counter > questionArray.length, then we display the result page.
   *
   *
   * Second step:
   *  - Design the views
   *      * To be fast, we recreate the view from the WelcomePage View (copy/paste)
   *
   *  - Setting the text to be questions:
   *      * We create a const variable questions at the beginning of the file (outside of the class), being an array of length 4
   *      * We fill this variable with 4 questions
   *      * We do the same thing with const image
   *      * We do the same thing with const correctAnswers
   *      * We create a var variable answers, that will store the user's answers
   *      * We explain the difference between const and var
   *
   *  - Creating the yesButton and noButton functions
   *      * Look at the function for more details
   *      * EXPLANATION FOR THE AUX VARIABLE:
   *            Why creating an aux variable when we could simply use this.state.counter??
   *            The reason is that when we use the this.setState({....}) function, this function will be treated in a secondary thread, which means that if we used:
   *              if (this.state.counter > 3){
   *              }
   *            The this.state.counter would be equal to the value of this.state.counter just as we didn't increment it,
   *            as the this.setState({....}) would not have had the time to increase the value of this.state.counter.
   *
   *            This is why we create a aux variable and increment in the main thread, in order to have a correct result when running:
   *              if (aux > 3){
   *              }
   */

  //First step
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <View style={styles.containerFlex}>
        <View style={styles.questionFlex}>
          <Text style={styles.questionText}>
            {questions[this.state.counter]}
          </Text>
          <Image
            style={styles.imageStyle}
            resizeMode= 'contain'
            source={{ uri: images[this.state.counter] }}
          />
        </View>
        <View style={styles.buttonsFlex}>
          <Button
            title="Yes!"
            color="green"
            onPress={() => this.answerFunc('Yes')}
          />
          <Button
            title="No"
            color="red"
            onPress={() => this.answerFunc('No')}
          />
        </View>
      </View>
    )
  }

  answerFunc(userAnswer){
    //Putting the answer in an array
    answers[this.state.counter] = userAnswer
    //Copying the value of counter and incrementing it
    var aux = this.state.counter
    aux++
    //Incrementing the counter
    this.setState({
      counter: this.state.counter + 1
    })
    //Checking if we have to display the next question or go to the ResultPage
    if (aux > 3) {
      this.navigateToResult()
    }
  }

  navigateToResult() {
    this.props.navigation.navigate('Result',
    {
      correctAnswers: correctAnswers,
      answers: answers
    })
  }

}


const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
  },
  questionFlex: {
    flex: 8,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#dddddd'
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  buttonsFlex: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: '#dddddd'
  },
  questionText: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default QuestionPages
