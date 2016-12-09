/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import Modal from 'react-native-simple-modal';

 import {

   StyleSheet,
   Image,
   Text,
   Alert,
   TouchableOpacity,
   Dimensions,
   Picker,
   View,
   ScrollView
 } from 'react-native';

 // import Nav from './global-widgets/nav'

 import SwipeCards from './SwipeCards';
 import Icon from 'react-native-vector-icons/FontAwesome';

 import Iconz from 'react-native-vector-icons/Ionicons';
export default class Matches extends Component {
  constructor(props){
    super(props)
    this.state = {
      openMatch: true
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Why wont the Modal work
          </Text>
          <Modal
            open={this.state.openMatch}
            modalDidOpen={()=> console.log('Match!')}
            modalDidClose={() => console.log('Boo')}
            style={{alignItems: 'center'}}
            >
              <Text style={{fontSize: 20, marginBottom:10}}>You've got a Match! </Text>
              <TouchableOpacity
                style={{margin:5}}
                onPress={() => this.setState({openMatch: false})}>
                <Text> Keep Playing! </Text>
              </TouchableOpacity>
            </Modal>
        </View>
    )
  }
}
//onPress = {() => this.renderNope()}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  row: {
    flexDirection:'row',
    margin:15,
    marginBottom:0,
    marginTop:5,
    alignItems:'flex-end'
  },
  title:{
    fontSize:14,
    fontWeight:'600',
    color:'#333'
  },
  commons:{
    padding:15
  },
  buttons:{
    width:80,
    height:80,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
  },
  description:{
    padding:15,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#e3e3e3',
    marginTop:10,
    marginBottom:10
  },
  buttonSmall:{
    width:50,
    height:50,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  }

});
