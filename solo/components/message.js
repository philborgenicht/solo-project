import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button, Alert} from 'react-native'

export default class Message extends Component{
  constructor(props){
    super(props);
    this.state={
      isEditable: false,
      newName:"",
      newMsg:"",
    }
  }

  editMessage(value){
    this.setState({isEditable: true})
  }

  deleteMessage = async () => {
    let id = this.props.id
    await fetch(`https://philborgassessment.herokuapp.com/messages/${id}`, {
     method: 'DELETE',
   })
   const response = await fetch('https://philborgassessment.herokuapp.com/messages/')
   const json = await response.json()
   this.setState({messages: json})
  }

  updateMessage = async () => {

    let newName=this.state.newName
    let newMsg=this.state.newMsg
    let id = this.props.id
    await fetch(`https://philborgassessment.herokuapp.com/messages/${id}`, {
     method: 'PATCH',
     body: JSON.stringify({
       name: newName,
       message: newMsg,
     }),
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     }
   })
   const response = await fetch('https://philborgassessment.herokuapp.com/messages/')
   const json = await response.json()
   this.setState({isEditable: false, messages: [...json]})
 }


  render(){
    if(this.state.isEditable){
    return(
      <View>


      <Text style={{color:'red'}}> Message #: {this.props.id}</Text>
      <Text style={{color:'white'}}>Sender: {this.props.name}</Text>
      <Text style={{color:'blue'}}>Message:{this.props.message}</Text>
      <Switch
      value={this.state.isEditable}
      onValueChange={()=>this.updateMessage()}
      id={this.props.id}/>
      <TextInput onChangeText={(newName)=>this.setState({newName:newName})} style={{backgroundColor:'pink', color:'purple'}} id={this.props.id} placeholder="edit name"/>

      <TextInput onChangeText={(newMsg)=>this.setState({newMsg:newMsg})} style={{backgroundColor:'pink', color:'purple'}} id={this.props.id} placeholder="edit message"/>



      </View>
    )
  }
  else if(!this.state.isEditable){
    return(
      <View>


      <Text style={{color:'red'}}> Message #: {this.props.id}</Text>
      <Text style={{color:'white'}}>Sender: {this.props.name}</Text>
      <Text style={{color:'blue'}}>Message:{this.props.message}</Text>
      <View>
      <Button
        title="delete"
        onPress={()=>this.deleteMessage()}
        />
      </View>
      <Switch
      value={this.state.isEditable}
      onValueChange={(value)=>this.editMessage(value)}/>




      </View>
    )
  }
}
}

AppRegistry.registerComponent('Message', ()=> Message);

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
  },
  button:{
    backgroundColor:'green',

  }
})
