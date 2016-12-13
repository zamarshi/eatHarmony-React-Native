import React, {Component} from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native'
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
const t = require('tcomb-form-native');
const URL = 'http://localhost:3000/user_token';
const Form = t.form.Form

const User = t.struct({
  email: t.String,
  password:  t.String
})

const options = {
  fields: {
    email: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    password: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false,
      secureTextEntry: true
    }
  }
}

class LoginView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: '',
        password: ''
      }
    }
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        email: '',
        password: null
      }
    }
  }

  _onChange = (value) => {
    this.setState({
      value
    })
  }
  _handleAdd = () => {
    const value = this.refs.form.getValue();
    // If the form is valid...
    if (value) {
      const data = {
          email: value.email,
          password: value.password
      }
      // Serialize and post the data
      axios.post(URL, {
        headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
       },
      auth: data
    }).then((res) => {
      if (res.error) {
        alert(res.error)
      } else {
        console.log('This is the res object:');
        console.log(res.data);
        AsyncStorage.setItem('jwt', res.data.jwt)
        alert(`Logged In! Start Swiping!`)
        Actions.index();
      }
    })
    .catch(() => {
      alert('There was an error logging in.');
    })
    .done()
  } else {
    // Form validation error
    alert('Please fix the errors listed and try again.')
  }
}




  render() {
    return (
      <ScrollView style={styles.container}>
        <Form
          ref='form'
          options={options}
          type={User}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight onPress={this._handleAdd}>
          <Text style={[styles.button, styles.greenButton]}>Log In</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  greenButton: {
    backgroundColor: '#4CD964'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

module.exports = LoginView
