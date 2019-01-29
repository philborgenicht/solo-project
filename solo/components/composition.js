import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button, Alert} from 'react-native'

export default class Composition extends Component{
  constructor(){
    super();
    this.state={
      sender: "",
      msg: ""
    }
  }



  newMessage = async () => {

  let sender=this.state.sender
  let message=this.state.msg
  let newMessage={}
  newMessage.name = sender
  newMessage.message = message
  await fetch('https://philborgassessment.herokuapp.com/messages/', {
   method: 'POST',
   body: JSON.stringify ({
     name: sender,
     message: message
   }),
   headers: {
     'Content-Type':'application/json',
     'Accept':'application/json'
   }
 })
  
  this.props.populateList()
}

  render(){
    return(
      <View>

      <TextInput onChangeText={(sender)=>this.setState({sender:sender})} style={{backgroundColor:'green', color:'white'}} id={this.props.id} placeholder="who are you?"/>

      <TextInput onChangeText={(msg)=>this.setState({msg:msg})} style={{backgroundColor:'green', color:'white'}} id={this.props.id} placeholder="what do you have to say?"/>

      <Button

        style={{backgroundColor:'white'}}
        onPress={this.newMessage}
        title="send new message"/>

      </View>
    )
  }
}

AppRegistry.registerComponent('Composition', ()=> Composition);
