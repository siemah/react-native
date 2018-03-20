import React, { Component } from 'react';
import {  View, Text, Button, Dimensions, CheckBox, Image } from 'react-native';

const Header = () => {
  return (
    <Image 
      source={ require("../logo.png") }
      style={{ width: 30, height: 30, position: "absolute", right: 10 }}
      />
  )
}

export default class Home extends Component {

  constructor( props ) {
    super( props );
    this.state = { checkbox: true }
  }

  static navigationOptions = {
    headerTitle: <Header />,
    headerStyle: {backgroundColor: "#45ae78"}
  }

  render() {
    return (
      <View>
        
        <Text>Home screen</Text>
        
        <Button 
          title="To main lower" 
          onPress={() => this.props.navigation.navigate('Main', { itemsId: 19, otherParam: 'Something here!'}) } />

        <View style={{flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center',}}>
          
          <CheckBox 
            disabled={false} 
            value={this.state.checkbox} 
            onValueChange={() => alert('before change' + this.state.checkbox)} 
            onChange={() => { this.setState(prev => ({ checkbox: !prev.checkbox })) }}
          />
          <Text onPress={() => this.setState(prev => ({checkbox: !prev.checkbox}))}>Checkbox element</Text>
        
        </View>

      </View>
    );
  }
}
