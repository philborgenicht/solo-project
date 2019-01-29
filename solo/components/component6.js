import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text, TextInput, Switch, Button, ListView} from 'react-native'

export default class Component6 extends Component{
  constructor(){
    super();
    const ds= new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
    this.state={
      dataSource: ds,
    }
  }

  componentDidMount(){
    this.getBooks()
  }

  getBooks(){
    fetch('https://philapi.herokuapp.com/api/books')
      .then((response)=> response.json())
      .then((response) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(response)
        })
      })
  }


  renderRow(book, sectionId, rowId, highlightRow){
    return(
      <View>
        <Text style={{color:'yellow'}}> {book.title} </Text>
      </View>
    )
  }



  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        />
    )
  }
}

AppRegistry.registerComponent('Component6', ()=> Component6);
