import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/Main';

export default class Logo extends Component {
  render() {
    return (
      <View style={[styles.flexCenter, styles.logoContainer] } >
        <Image
          source={ require('../../logo.png') }
          style={ styles.logo }
        />
        <Text style={ styles.logoText } >Welcom Malcom</Text>
      </View>
    )
  }
}