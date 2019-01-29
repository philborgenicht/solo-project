import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button} from 'react-native'

export default class Header extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return(
      <View>
      <Text style={{color:'green'}}>React-Native Messages</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Header', ()=> Header);


const styles=StyleSheet.create({
  comp1:{
    flex:5
  },
  comp2:{
    flex:5
  },
  comp3:{
    flex:1
  },
  comp4:{
    flex:1
  },
  comp5:{
    flex:1
  },
  comp6:{
    flex:1
  }
})
