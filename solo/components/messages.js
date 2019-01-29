import React, {Component} from 'react'
import Message from './message.js'
import Composition from './composition.js'
import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Messages extends Component{
  constructor(){
    super();
    this.state={
      isComposing:false
    }
  }


  compose=()=>{
    this.setState({isComposing: true})
  }
  returnToInbox=()=>{
    this.setState({isComposing: false})
  }
  render(){
    if(!this.state.isComposing){
    return(
      <View>
      <Button
        title="compose new msg"
        onPress={this.compose}/>

      {this.props.messageList.sort((m1,m2)=>m1.id-m2.id).map(message=>
        <Message
          id={message.id}
          name={message.name}
          message={message.message}
        />)}
      </View>
    )
  }
  else if (this.state.isComposing){
    return(
      <View>
      <Composition />
      <Button
        title="finished sending?"
        onPress={this.returnToInbox}/>

      {this.props.messageList.map(message=>
        <Message
          id={message.id}
          name={message.name}
          message={message.message}
        />)}
      </View>
    )
  }
  }
}

AppRegistry.registerComponent('Messages', ()=> Messages);
