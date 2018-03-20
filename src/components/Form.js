import React, { Component } from 'react';
import {  View, TextInput, } from 'react-native';
import styles from '../styles/Main';

class InputField extends Component{
  render = () => (
    <View style={[styles.formGroup,]}>
      <TextInput
        returnKeyType='next'
        underlineColorAndroid='transparent'
        style={styles.formControl}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor='#DDD'
        {...this.props}
      />
    </View>
  );
} 

export default class Form extends Component {

  submit () {
    console.warn( this.props );
  }

  render() {
    return (
      <View>
        <InputField
          placeholder='Your mail'
          autoFocus={true}
          keyboardType="email-address"
          onSubmitEditing={ this.submit }
        />
        <InputField
          ref='password'
          placeholder='Password'
          onSubmitEditing={this.submit}
          secureTextEntry={true}
        />
      </View>
    );
  }
}
