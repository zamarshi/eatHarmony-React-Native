/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Home from './home'
import Profile from './testProfile.js'
import Icon from 'react-native-vector-icons/FontAwesome';



export default class FoodDate extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'Home'
    };
  }
  render() {
    return (

      <TabBarIOS
        unselectedTintColor="black"
        selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          title="Profile"
          selected={this.state.selectedTab === 'Profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'Profile'
            });
          }}>
         <Profile />

        </TabBarIOS.Item>

        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Home'}
          title="Swipe Screen"

          onPress={() => {
            this.setState({
              selectedTab: 'Home'
            });
          }}>
          <Home />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Test Profile"
          selected={this.state.selectedTab === 'Profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'Profile'
            });
          }}>
         <Profile />
        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width:30,
    height:30,
    marginTop: 1
  }
});

AppRegistry.registerComponent('FoodDate', () => FoodDate);
