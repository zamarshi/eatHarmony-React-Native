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
  AsyncStorage,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconz from 'react-native-vector-icons/Ionicons';
// import Nav from './global-widgets/nav'
import SwipeCards from './SwipeCards';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

var image = [];
 image[0] = require('./image1.jpg');
 image[1] = require('./image2.jpg');
 image[2] = require('./image32.jpg');
 image[3] = require('./image4.jpg');
 image[4] = require('./image5.jpg');
 image[5] = require('./image6.jpg');
 image[6] = require('./image7.jpg');


let testCards = [];


export default class Home extends Component {
  constructor(props){
    super(props)
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
    this.state = {
      cards: [],
      openMatch: false,
      currentMatchCard: []
    }
  }

    fetchData() {
     AsyncStorage.getItem('jwt', (err, token) => {
       axios.get('http://localhost:3000/users', {
         headers: {
           Accept: 'application/json',
           Authorization: `JWT ${token}`
         }
       }).then((userObj) => {
         userObj.data.forEach((user, index) => {
           testCards[index] = {
             id: user.id,
             first_name: user.first_name,
             age: user.age,
             friends: 2,
             interests: 39,
             image: image[index],
             description: '',
             liker: true
           };
         });
         this.setState({ cards: testCards });
       })
       .catch(() => {
         alert('There was an error fetching the users')
       })
       .done()
     })
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

            </View>
          </View>
          </View>
      </View>
    )
  }

  matchModal() {
    return(
      <Modal
        open={this.state.openMatch}
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


  handleYup(card) {
    if (card.liker){
      this.setState({openMatch: true})
    }
    this.setState({currentMatchCard: this.state.cards.shift()})
  }

  handleNope (card) {
    this.state.cards.shift()
  }
  noMore(){
    return (
      <View>
        <Text style={{fontSize:32}}>No More Cards</Text>
      </View>
    )
  }

  yup(){
this.refs['swiper']._goToNextCard()  }

nope(){
this.refs['swiper']._goToNextCard()  }

componentDidMount() {
    this.fetchData();
  // this.setState({openMatch: true})
}

  render() {
    return (
      <View style={styles.container}>



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
    backgroundColor: 'rgba(0, 0, 0, 1)',
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

  bottomThird: {
    flex: 1.3,
    backgroundColor: 'white',
    marginTop: 30,
    // alignItems:'flex-start',
    justifyContent:'center',
    flexDirection: 'row'
  },
  middleThird: {
    flex: 2.4
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
