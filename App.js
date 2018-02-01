/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

import Component1  from './app/Component1/Component1';
import Component2  from './app/Component2/Component2';
import Component3  from './app/Component3/Component3';
import Component4  from './app/Component4/Component4';
export default class newapplication extends Component<{}> {
 

  render() {
    return (
      <View>
            <Component4 /> 
        </View>
    );
  }
}


AppRegistry.registerComponent('newapplication', () => newapplication);