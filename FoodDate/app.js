/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// tweet to @notbrent -- example of how icons might work


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Home from './home'
// import Profile from './testProfile.js'
import Login from './LoginView.js'
import Settings from './settings.js'
import Matches from './matches.js'
import Chat from './chat.js';

import Icon from 'react-native-vector-icons/FontAwesome';

const Locations = ['Yaletown', 'Gastown', 'Kits', 'Dunbar', 'Coal Harbour', 'North Van', 'Burnaby', 'Surrey', 'Richmond']
const Cuisines = ['Japanese', 'Chinese', 'Italian', 'French', 'Canadian', 'Burgers', 'Fast Food', 'Vietnamese', 'Greek', 'Bars and Pubs', 'Indian']


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'Home',


    };
  }


  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <Icon.TabBarItemIOS
          title="Settings"
          iconName='gear'
          iconColor='purple'
          selected={this.state.selectedTab === 'Settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'Settings'
            });
          }}>
         <Settings locations={Locations} cuisines={Cuisines}/>
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'Home'}
          title="Swipe Screen"
          iconName='home'
          onPress={() => {
            this.setState({
              selectedTab: 'Home'
            });
          }}>
          <Home />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title="Chat"
          iconName='star'
          selected={this.state.selectedTab === 'Chat'}
          onPress={() => {
            this.setState({
              selectedTab: 'Chat'
            });
          }}>
         <Matches />
        </Icon.TabBarItemIOS>

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
