import React, { Component } from 'react';
import {  View, Text, TouchableHighlight } from 'react-native';

export default class Main extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return { 
      title: params ? params.otherParam : "Main",
    }
  }

  render() {
    
    const { params } = this.props.navigation.state;
    let itemsId = params? params.itemsId : null;
    let otherParam = params? params.otherParam : null;

    return (
      <View>
        <Text> Main Screen </Text>
        <Text>itemId: {JSON.stringify(itemsId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <TouchableHighlight 
          activeOpacity={0.6} 
          underlayColor='#a00000'
          onPress={ () => this.props.navigation.navigate('sc2') }>
          <Text>To main from main</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='green' onPress={() => this.props.navigation.goBack() }>
          <Text>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="pink" onPress={() => this.props.navigation.setParams({ otherParam: "Update!"})} >
          <Text>Update a navigationOptios params</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
