import React, { Component } from 'react';
import {  View, Text, StatusBar, } from 'react-native';
import Logo from "./Logo";
import Form from "./Form";
import Footer from "./Footer";

import styles from '../styles/Main';

export default class Signin extends Component {

  open = page => alert('SignUp')// this.props.navigation.navigate( page )

  render() {
    return (
      <View style={[ styles.container, styles.flexCenter, { flex: 1, } ] }>
        <StatusBar backgroundColor='#1c313a' barStyle='light-content' />
        <Logo />
        <Form />
        <Footer text="if you are not signed?" textBold='Signup' open={ this.open } />
      </View>
    );
  }
}
