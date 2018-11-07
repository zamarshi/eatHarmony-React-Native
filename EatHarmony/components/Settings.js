/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Modal from "react-native-simple-modal";
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
} from "react-native";

import SettingsList from "react-native-settings-list";
import Location from "./TestProfile.js";
const Item = Picker.Item;

// This Class is to display the settings screen on the Navigation Tab Bar
// As well as to render the Modals that appear when you select a Location
// or Cuisine to Change

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    //default states for users.
    this.state = {
      switchValue: false,
      openLocation: false,
      openCuisine: false,
      location: "Yaletown",
      cuisine: "Japanese",
      locations: props.locations,
      cuisines: props.cuisines
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <View
          style={{
            borderBottomWidth: 1,
            backgroundColor: "#f7f7f8",
            borderColor: "#c8c7cc"
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              marginTop: 30,
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            Settings
          </Text>
        </View>
        <View style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Header headerStyle={{ marginTop: 1 }} />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("./toastIcon.png")}
                />
              }
              hasSwitch={true}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title="Appear in Stack"
              titleStyle={{ fontSize: 16 }}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("./locationIcon.png")}
                />
              }
              title="Location"
              titleStyle={{ fontSize: 16 }}
              titleInfo={this.state.location}
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => this.setState({ openLocation: true })}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("./cuisineIcon.png")}
                />
              }
              title="Cuisine"
              titleStyle={{ fontSize: 16 }}
              titleInfo={this.state.cuisine}
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => this.setState({ openCuisine: true })}
            />
          </SettingsList>
        </View>
        {this.locationModal()}
        {this.cuisineModal()}
      </View>
    );
  }

  onValueChange(value) {
    this.setState({ switchValue: value });
  }

  // Location Modal is the screen that renders when you click the location setting
  locationModal() {
    return (
      <Modal
        open={this.state.openLocation}
        modalDidclose={() => this.setState({ openLocation: false })}
        style={{ alignItems: "center" }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 25, marginBottom: 10, alignItems: "center" }}
          >
            Choose Your Location:{" "}
          </Text>
        </View>
        {/*locationModalList takes the array of locations passed from the
              head branch and displays them in the modal  */}
        {this.locationModalList()}

        <TouchableOpacity
          style={{ margin: 5 }}
          onPress={() => this.setState({ openLocation: false })}
        >
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 11 }}> Cancel </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  // cuisineModal does the same thing as location modal but for the list of
  // cuisines
  cuisineModal() {
    return (
      <Modal
        open={this.state.openCuisine}
        modalDidOpen={() => console.log("modal did open")}
        modalDidclose={() => this.setState({ openCuisine: false })}
        style={{ alignItems: "center" }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 26, marginBottom: 10 }}>
            Choose Your Cuisine:{" "}
          </Text>
        </View>
        {this.cuisineModalList()}
        <TouchableOpacity
          style={{ margin: 5 }}
          onPress={() => this.setState({ openCuisine: false })}
        >
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 11 }}> Cancel </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  locationModalList() {
    var locs = this.state.locations.map(
      function(city, index) {
        return (
          <TouchableOpacity
            style={{ margin: 5, alignItems: "center" }}
            key={index}
            onPress={() =>
              this.setState({ location: city, openLocation: false })
            }
          >
            <Text style={{ fontSize: 18 }}> {city} </Text>
          </TouchableOpacity>
        );
      }.bind(this)
    );
    return locs;
  }
  cuisineModalList() {
    var cuis = this.state.cuisines.map(
      function(cuisine, index) {
        return (
          <TouchableOpacity
            style={{ margin: 5, alignItems: "center" }}
            key={index}
            onPress={() =>
              this.setState({ cuisine: cuisine, openCuisine: false })
            }
          >
            <Text style={{ fontSize: 18 }}> {cuisine} </Text>
          </TouchableOpacity>
        );
      }.bind(this)
    );
    return cuis;
  }

  // changeLocation() {
  //  AsyncStorage.getItem('jwt', (err, token) => {
  //    axios.patch('http://localhost:3000/users', {
  //      headers: {
  //        Accept: 'application/json',
  //        Authorization: `JWT ${token}`
  //      }
  //    }).then((userObj) => {
  //      console.log(userObj.data)
  //      userObj.data.forEach((user, index) => {
  //        testCards[index] = {
  //          id: user.id,
  //          first_name: user.first_name,
  //          age: 26,
  //          friends: 2,
  //          interests: 39,
  //          image: image3,
  //          description: '',
  //          liker: true
  //        };
  //      });
  //      console.log(testCards)
  //      this.setState({ cards: testCards });
  //    })
  //    .catch(() => {
  //      alert('There was an error fetching the users')
  //    })
  //    .done()
  //  })
  //  }
}
const styles = StyleSheet.create({
  imageStyle: {
    marginLeft: 15,
    alignSelf: "center",
    height: 35,
    width: 35
  },
  titleInfoStyle: {
    fontSize: 16,
    color: "#8e8e93"
  }
});
