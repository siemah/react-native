import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, } from 'react-native'

export default class Login extends Component {

  constructor ( props ) {

    super ( props );
    this.state = {
      isEmail: true
    }; 

  }

  isEmail = text => {
    let emailRegExp = /^[a-zA-Z]+$/;
    if( !emailRegExp.test( text ) ) 
      this.setState({isEmail: false});
    else this.setState({isEmail: true});
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={styles.inputContainer}>
          
          <TextInput 
            style={[styles.input, !this.state.isEmail && styles.inputError ]}
            placeholder='Email' 
            autoFocus={true} 
            returnKeyType="next" 
            {...inputProps} 
            keyboardType='email-address'
            onChangeText={ text => this.isEmail( text ) }
          />

          <TextInput 
            style={[styles.input, !this.state.isEmail && styles.inputError ]}
            placeholder='Password' 
            returnKeyType="done" 
            secureTextEntry={true} 
            {...inputProps} 
          />

          <TouchableOpacity 
            style={ styles.btn } 
            onPress={ () => { return; }} 
            activeOpacity={.9}
          >
            <Text 
              style={{
                color: "#45ae79",
                fontWeight: 'bold',
                fontFamily: 'IBMPlexMono-ExtraLight',
                fontSize: 18,
              }}>Login</Text>
          </TouchableOpacity>
            
        </View>

        <View style={{ marginTop: 30, alignItems: 'center',}}>
          <Text style={{ color: "#eee", fontWeight: '900', fontSize: 16, }}>Not a membre? Sign up now.</Text>
        </View>       
        
      </View>
    )
  }
}

/**
 * @var { Object } style contain a style object
 * @var { Object } inputProps list of TextInput props 
 */

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#45ae79",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  }, inputError: {
    borderColor: '#ae4579',
  },input: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#bbb",
    backgroundColor: "#fff",
    width: Dimensions.get('window').width - 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0)',
  }, btn: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 0,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#ddd",
    alignItems: 'center',
  }
});

const inputProps = {
  autoCapitalize: "none",
  autoCorrect: false,
  defaultValue: '',
  placeholderTextColor: "#ccc",
  underlineColorAndroid: 'rgba(0,0,0,0)',
}
