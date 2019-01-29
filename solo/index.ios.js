import React, {Component} from 'react'
import Header from './components/header.js'
import Messages from './components/messages.js'
import Message from './components/message.js'

import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class MyApp extends Component{
  constructor(){
    super();
    this.state={
      messages:[]
    }
  }

  componentDidMount = async() => {
     const response = await fetch("https://philborgassessment.herokuapp.com/messages/", {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       }
     })
     const messages = await response.json()
     const newState = {messages:[...messages]}
     this.setState(newState)
   }



  render(){
    return(
      <View style={{flex:1, flexDirection:'column', backgroundColor: 'orange'}}>

      <View style={styles.comp1}>
      <Header />
      </View>

      <View style={styles.comp2}>
      <Messages messageList={this.state.messages} />
      </View>




      </View>
    )
  }
}

const styles=StyleSheet.create({

  comp1:{
    flex:1,
    height:25,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  comp2:{
    flex:2,
    height:25,
    width: 200

  },
  comp3:{
    flex:1,
    height:50,
    width: 200
  },
  comp4:{
    flex:1,
    height:50,
    width: 200
  },
  comp5:{
    flex:1,
    height:50,
    width: 200
  },
  comp6:{
    flex:1,
    height:50,
    width: 200
  }
})

AppRegistry.registerComponent('solo', ()=>MyApp);
