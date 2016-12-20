import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react';


export default class Chat extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this._isAlright = null;
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hey there 😊',
          createdAt: new Date(),
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
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'Emma is typing'
          };
        });
      }
    }

    setTimeout(() => {

      this.onReceive('Sure I would love to! 🌮🌮☺️');
      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
}

onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Emma Watson',
            avatar: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/08/09/emmawatson.jpg',
          },
        }),
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
