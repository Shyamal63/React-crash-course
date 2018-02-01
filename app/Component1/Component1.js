
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,

} from 'react-native';


export default class Component1 extends Component<{}> {
    constructor(props){
        super(props);
        this.state={
          name:'shyamal',
          showName:true,
          message:this.props.message

        }
      }
      static defaultProps={
          message:'How r u'
      }

  render() {
      let name=this.state.showName ? this.state.name : 'no name';
    return (
      <View><Text>{this.state.message}</Text>
      <Text>{name}</Text>
      </View>
    );
  }
}
