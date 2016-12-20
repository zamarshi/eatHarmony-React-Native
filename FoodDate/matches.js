/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AsyncStorage,
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

import SettingsList from 'react-native-settings-list';
const Item = Picker.Item;
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
var pics = [];
pics[0] = require('./image32.jpg');
pics[1] = require('./tam.jpg');
pics[2] = require('./image6.jpg');
pics[3] = require('./image2.jpg');


// This Class is to display the settings screen on the Navigation Tab Bar
// As well as to render the Modals that appear when you select a Location
// or Cuisine to Change

export default class Matches extends Component {
  constructor(props){
      super(props);
      this.onValueChange = this.onValueChange.bind(this);
      //default states for users.
      this.state = {
          matches: []
        };
      }

      openChat(first_name, last_name, avatar){
        Actions.messages({first_name, last_name, avatar});
      }


    render() {
      return (
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
            <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Matches</Text>
          </View>
          <View style={{backgroundColor:'#EFEFF4',flex:1}}>
            {/* SettingsList is imported from a package. It makes it easy to
              render the list that looks like IOS Settings. */}
            <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
              {this.matchList()}
            </SettingsList>
          </View>
        </View>
      );
    }

    onValueChange(value){
      this.setState({switchValue: value});
    }
    componentWillMount() {
        this.getMatches();
      // this.setState({openMatch: true})
    }

    getMatches() {
     AsyncStorage.getItem('jwt', (err, token) => {
       axios.get('http://localhost:3000/matches', {
         headers: {
           Accept: 'application/json',
           Authorization: `JWT ${token}`
         }
       }).then((userObj) => {
         this.setState({matches: userObj.data})
       });
       })
       .catch(() => {
         alert('There was an error fetching the matches')
       })
       .done()
     }

     matchList() {

       var userMatch = this.state.matches.map(function(user, index){
         return(
           <SettingsList.Item
             title={user.first_name}
             icon={<Image style={styles.imageStyle} source={pics[index]}/>}
             key={index}
             titleStyle={{fontSize:16}}
             onPress={() => this.openChat(user.first_name, user.last_name, pics[index])}
           />
       )
     }.bind(this))
       return userMatch
     }
     }

  const styles = StyleSheet.create({
    imageStyle:{
      marginLeft:15,
      borderRadius: 13,
      alignSelf:'center',
      height:35,
      width:35
    },
    titleInfoStyle:{
      fontSize:16,
      color: '#8e8e93'
    }
  });
