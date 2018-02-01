import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  TextInput,
  Switch
} from 'react-native';


export default class Component3 extends Component<{}> {
    constructor(){
        super();
        this.state={
            textValue:'hello',
            switchValue:false
        }
    }
    onChangeText(value){
        this.setState({
            textValue:value
        });

    }
    onSubmit(){
        console.log('text is inputted');
    }
    onSwitchChange(value){
        this.setState({
            switchValue:value
        })

    }

  render() {
    return (
      <View>
          <TextInput 
          placeholder="Enter text"
           value={this.state.textValue}
        onChangeText={(value) => this.onChangeText(value)}
        onSubmitEditing={this.onSubmit}
           />
           <Text>{this.state.textValue}</Text>
           <Switch 
           value={this.state.switchValue}
           onValueChange={(value) => this.onSwitchChange(value) }
            />
        </View>
    );
  }
}