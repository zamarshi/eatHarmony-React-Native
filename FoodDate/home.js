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

var image1 = require('./image1.jpg')
var image2 = require('./image2.jpg')
var image3 = require('./image3.jpg')
var image4 = require('./image4.jpg')
var image5 = require('./image5.jpg')
var image6 = require('./image6.jpg')
var image7 = require('./image7.jpg')





const Cards = [{
  "id": 1,
  "first_name": "Calvin",
  "age": 21,
  "friends": 9,
  "interests": 38,
  "image": image2,
  "description": "",
  "liker": true
}, {
  "id": 2,
  "first_name": "Jeff",
  "age": 27,
  "friends": 16,
  "interests": 49,
  "image": image3,
  "description": "",
  "liker": false
}, {
  "id": 3,
  "first_name": "Dog",
  "age": 29,
  "friends": 2,
  "interests": 39,
  "image": image4,
  "description": "",
  "liker": true
}, {
  "id": 4,
  "first_name": "Cat",
  "age": 20,
  "friends": 18,
  "interests": 50,
  "image": image4,
  "description": '',
  "liker": true
}, {
  "id": 5,
  "first_name": "Jessica",
  "age": 29,
  "friends": 2,
  "interests": 39,
  "image": image3,
  "description": '',
  'liker':true
}, {
  "id": 6,
  "first_name": "Sho",
  "age": 29,
  "friends": 2,
  "interests": 39,
  "image": image3,
  "description": '',
  'liker':true
}]

export default class Home extends Component {
  constructor(props){
    super(props)
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
    this.state = {
      cards: Cards,
      openMatch: false,
      currentMatchCard: Cards[0]
    }
  }
  Card(x){
    return (
      <View style={styles.card}>
        {/* Picture */}
        <Image source ={x.image} style ={styles.pic} />
        <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', margin:15, marginTop:5,}} >
            <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{x.first_name}, </Text>
            <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{x.age}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{padding:0,  borderColor:'#e3e3e3', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Icon name='facebook-square' size={20} color="blue" />
            </View>
          </View>
          </View>
      </View>
    )
  }

  matchModal() {
    console.log(this.state.openMatch)
    return(
      <Modal
        open={this.state.openMatch}
        modalDidOpen={()=> console.log('Match!')}
        modalDidclose={() => this.setState({openMatch: false})}
        modalStyle={styles.matchDesign}
        >
          <Text style={styles.matchTextDesign}>It's a Match! </Text>
          <Text style={{color:'white'}}> You and {this.state.currentMatchCard.first_name} have liked each other! </Text>
          <TouchableOpacity
            style={{margin:5}}
            onPress={() => this.setState({openMatch: false})}>
            <Text style={{color:'white'}}> Keep Playing! </Text>
          </TouchableOpacity>
    </Modal>
  )

  }


  handleYup (card) {
    console.log('in method handleYup')
    console.log(this.state.openMatch)
    if (card.liker){
      this.setState({openMatch: true})
      console.log(this.state.openMatch)
    }
    this.setState({currentMatchCard: this.state.cards.shift()})
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
    this.state.cards.shift()
  }
  noMore(){
    return (
      <View>
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

nope(){
    console.log(this.refs['swiper'])
this.refs['swiper']._goToNextCard()  }

componentDidMount() {
  // this.setState({openMatch: true})
}

  render() {
    return (
      <View style={styles.container}>

           <View style={styles.topThird}>
            <View style={styles.logo}>
             <Text style={styles.firstlogo}>👫 eat</Text>
             <Text style={styles.secondlogo}>Harmony 🍷</Text>
            </View>
           </View>

        <View style={styles.middleThird}>
          <SwipeCards
            ref = {'swiper'}
            cards={this.state.cards}
            containerStyle = {{ backgroundColor: 'white', alignItems:'center', margin:20}}
            renderCard={(cardData) => this.Card(cardData)}
            renderNoMoreCards={() => this.noMore()}
            handleYup={this.handleYup}
            handleNope={this.handleNope} />


        </View>
        <View style={styles.bottomThird}>
          <TouchableOpacity style = {styles.buttons} onPress = {() => this.nope()}>
            <Iconz name='ios-close' size={45} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttonSmall}>
            <Iconz name='ios-information' size={25} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttons} onPress = {() => this.yup()}>
            <Iconz name='ios-heart' backgroundColor='black' size={36} color="#888" style={{marginTop:5}} />
          </TouchableOpacity>

        </View>
        {this.matchModal()}
      </View>
    )
}
}
//onPress = {() => this.renderNope()}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo:{
    flexDirection: 'row'
  },
  firstlogo: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    color: 'grey'
  },
  secondlogo: {
    fontSize: 35,
    fontFamily: 'Georgia',
  },
  matchDesign: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center'
  },
  matchTextDesign: {
    fontSize: 36,
    fontFamily:'Bradley Hand',
    marginBottom:10,
    color: 'white',
    alignItems: 'center',
    marginTop: 200,
    marginBottom: 200
  },
  buttons:{
    width:80,
    height:80,
    borderWidth:10,
    borderColor:'#AED6F1',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40,
    backgroundColor: 'white'
  },
  buttonSmall:{
    width:50,
    height:50,
    borderWidth:10,
    borderColor:'#AED6F1',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  },
  topThird: {
    flex: 0.8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bottomThird: {
    flex: 1.3,
    backgroundColor: 'white',
    alignItems:'flex-start',
    justifyContent:'center',
    flexDirection: 'row'
  },
  middleThird: {
    flex: 4
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#D6EAF8',
    width: 370,
    height: 440,
  },
  pic: {
    width:325,
    height:300,
    marginTop: 5,
    borderRadius: 25
  }

});
