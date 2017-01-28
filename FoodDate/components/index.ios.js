/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// tweet to @notbrent -- example of how icons might work


import React, { Component } from 'react';
import Router from './router'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';


const App = () => {
  return(
    <Router />
  );
};

AppRegistry.registerComponent('FoodDate', () => App);
