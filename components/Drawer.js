import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Drawer extends Component {
  
  static navigationOptions = {
    drawerLabel: "Drawer"
  };

  render() {
    return (
      <View>
        <Text> Drawer screen </Text>
      </View>
    )
  }
}