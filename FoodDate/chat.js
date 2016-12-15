import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';


export default class Chat extends Component  {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hey there 😊',
          createdAt: new Date(Date.UTC(2016, 11, 14, 17, 20, 0)),
          user: {
          _id: 2,
          name: this.props.first_name + ' ' + this.props.last_name,
          avatar: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/08/09/emmawatson.jpg'
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
