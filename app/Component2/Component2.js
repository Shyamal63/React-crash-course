import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';


export default class Component2 extends Component<{}> {

    onPress(){
        console.log('clicked');
    }
    onPress2(){
        console.log('opacity is checked');
    }
 
  render() {
    return (
        <View>
      <View style={styles.myview}>
        <Text style={styles.mytext}>shyamal gayen</Text>
        </View>
        <View style={styles.container}>
            <TouchableHighlight
             style={styles.v1}
             onPress={this.onPress}
             underlayColor='white'>
            <View >
                <Text>View1</Text>
            </View>
            </TouchableHighlight >
             <TouchableOpacity  style={styles.v2} onPress2={this.onPress2}>
            <View >
                <Text>View2</Text>
            </View>
            </TouchableOpacity>
            
            <View style={styles.v3}>
                <Text>View3</Text>
            </View>
            </View>
        </View>
        

    );
  }
}
const styles=StyleSheet.create({
    myview:{
        backgroundColor:"violet"
    },
mytext:{
color:'red'
},
container:{
    flexDirection:'row',
    height:100
},
v1:{
      flex:1,
      backgroundColor:'red',
      padding:10
},
v2:{
      flex:1,    
      backgroundColor:'yellow',
    padding:10
},
v3:{
    flex:1,
    backgroundColor:'green',
    padding:10
}


})