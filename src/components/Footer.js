import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', position: 'absolute', bottom: 20, flexDirection: 'row' }}>
        <Text style={{ color: '#ccc',}}> {this.props.text} </Text>
        <Text 
          onPress={ () => this.props.open() }
          style={{ color: '#FFF', fontWeight: '700', }}>  
        </Text>
        <TouchableHighlight
          onPress={ () => this.props.open() }
          activeOpacity={1}
          underlayColor="transparent"
        >
          <Text style={{ color:"#fff", fontWeight: '600'}}>{this.props.textBold}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}