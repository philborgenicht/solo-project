import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Component5 extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <View>
      <Text style={{color:'yellow'}}>{this.props.message}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Component5', ()=> Component5);
