import {statusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default class App extends Component {
    constructor(){
    super();
        this.state = {
          word:' ',
          consonant:0,
          vowels:0,
          character:0,
          stringSplit: ' '
    }
  }

  WordAnalyzer =( ) => {
    this.state.vowels=0;
    this.state.consonant=0;
    const stringSplit=this.state.word.split('');
    this.state.character=stringSplit.length;
    for (var i =0; i<stringSplit.length; i++){
      if(stringSplit[i] === "a" || stringSplit[i] === "e" || stringSplit[i] === "i" || stringSplit[i] === "o" || stringSplit[i] === "u"||
        stringSplit[i] === "A" || stringSplit[i] === "E" || stringSplit[i] === "I" || stringSplit[i] === "O" || stringSplit[i] === "U"){
        this.state.vowels +=1;
      }else{
        this.state.consonant +=1;
      }
    }
    this.state.stringSplit=stringSplit.join('');
    this.setState({word: ' '})
  };

  render() {
    return (
      <View style={styles.container}>  
        <h1 styles={styles.label2}> A WORD ANALYZER </h1>

        <View style={styles.box}>
        <Text styles={styles.label2}>Word : </Text>
        <TextInput style={styles.TextInput} onChangeText={(word) =>
          this.setState({word})} placeholder='detect'/>
          <br/>
          <Button style={styles.Button} color="#49403a" onPress={() => this.WordAnalyzer()} title='analyzer'/>
              <br/>
              <Text styles={styles.label2}>Word                    : {this.state.stringSplit}</Text>
              <br/>
              <Text styles={styles.label2}>No of Consonant : {this.state.consonant}</Text>
              <br/>
              <Text styles={styles.label2}>No of Vowel         : {this.state.vowels}</Text>
              <br/>
              <Text styles={styles.label2}>No of Character    : {this.state.character}</Text>
          </View>

      </View>
      );
    }
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6e3d8',
      },
      box: {
        width: 500,
        height: 800,
        padding: 10,
        justifyContent: 'left',
        alignItems: 'left',
      },
      Button:{
        padding: 50,
        borderBottomColor: "black",
        alignItems: 'center',
        marginTop: 10,
      },
    TextInput: {
        placeholder: 'left',
        justifyContent: 'left',
        textAlign: 'center',
       

    label:{
        textAlign: 'left',
        fontSize: 50,

    },
    label2: {
       fontSize: 20,
       textAlign: 'justify',
       margin: 10,
        },
      }
   
  });