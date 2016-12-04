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

import SettingsList from 'react-native-settings-list';
import Location from './testProfile.js'
const Item = Picker.Item;


export default class Settings extends Component {
  constructor(){
      super();
      this.onValueChange = this.onValueChange.bind(this);
      this.state = {
        switchValue: false,
        openLocation: false,
        openCuisine: false,
        location: 'Yaletown',
        cuisine: 'Japanese'
        };
      }

    render() {
      return (
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
            <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
          </View>
          <View style={{backgroundColor:'#EFEFF4',flex:1}}>
            <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
              <SettingsList.Header headerStyle={{marginTop:15}}/>
              <SettingsList.Item
                icon={
                    <Image style={styles.imageStyle} source={require('./tinder-icon.png')}/>
                }
                hasSwitch={true}
                switchState={this.state.switchValue}
                switchOnValueChange={this.onValueChange}
                hasNavArrow={false}
                title='Appear in Stack'
                titleStyle={{fontSize:16}}
              />
              <SettingsList.Item
                icon={<Image style={styles.imageStyle} source={require('./tinder-icon.png')}/>}
                title='Location'
                titleStyle={{fontSize:16}}
                titleInfo=''
                titleInfoStyle={styles.titleInfoStyle}
                onPress={() => this.setState({openLocation: true})}
              />
              <SettingsList.Item
                icon={<Image style={styles.imageStyle} source={require('./tinder-icon.png')}/>}
                title='Cuisine'
                titleStyle={{fontSize:16}}
                titleInfo=''
                titleInfoStyle={styles.titleInfoStyle}
                onPress={() => this.renderComponent('Location')}
              />
              <SettingsList.Item
                icon={<Image style={styles.imageStyle} source={require('./tinder-icon.png')}/>}
                title='Restaurant'
                titleStyle={{fontSize:16}}
                onPress={() => renderComponent('Location')}
              />
            </SettingsList>
          </View>
          {this.locationModal()}
        </View>
      );
    }

    onValueChange(value){
      this.setState({switchValue: value});
    }

    locationModal(){
      console.log(this.state)
      return(
      <Modal
          open={this.state.openLocation}
          modalDidOpen={()=> console.log('modal did open')}
          modalDidclose={() => this.setState({openLocation: false})}
          style={{alignItems: 'center'}}
          >
            <Text style={{fontSize: 20, marginBottom:10}}>Choose Your Location: </Text>
            <TouchableOpacity
              style={{margin:5}}
              onPress={() => this.setState({location: 'Yaletown'})}>
              <Text> Yaletown </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin:5}}
              onPress={() => this.setState({location: 'Gastown'})}>
              <Text> Gastown </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin:5}}
              onPress={() => this.setState({location: 'Kits'})}>
              <Text> Kits </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin:5}}
              onPress={() => this.setState({location: 'Broadway'})}>
              <Text> Broadway </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin:5}}
              onPress={() => this.setState({location: 'Coal Harbour'})}>
              <Text> Coal Harbour </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin:5}}
              onPress={() => this.setState({openLocation: false})}>
              <Text> Save </Text>
            </TouchableOpacity>
      </Modal>
    )}



  }
  const styles = StyleSheet.create({
    imageStyle:{
      marginLeft:15,
      alignSelf:'center',
      height:30,
      width:30
    },
    titleInfoStyle:{
      fontSize:16,
      color: '#8e8e93'
    }
  });
