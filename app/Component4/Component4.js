import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ListView
} from 'react-native';
users=[
    {name:'shyamal'},
    {name:'Argha'},
    {name:'souvik'},
    {name:'apu'},
]

export default class Component4 extends Component<{}> {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          userDataSource: ds.cloneWithRows(users),
        };
    }
    renderRow(user){
        return(
      <View>
          <Text>{user.name}</Text>
          </View>
        )
    }
  render() {
    return (
      <ListView
           dataSource={this.state.userDataSource}
           renderRow={this.renderRow.bind(this)}
        />
        
    );
  }
}