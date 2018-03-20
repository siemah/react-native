/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    Dimensions,
    Modal,
    TouchableHighlight,
    Image,
} from 'react-native';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import Signin from './src/components/Signin';
import Signup from './src/components/Signup';

export default class App extends Component {

    render() {
        let width = Dimensions.get('window').width / 4 - 20;
        return (
            <Signin />
        );
    }

}
