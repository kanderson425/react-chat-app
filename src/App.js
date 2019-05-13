import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import './App.css';
import './style.css';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import {tokenUrl, instanceLocator} from './config';

class App extends React.Component {

  constructor() {
    super() 
    this.state = {
      currentRoomId: null,
      joinableRooms: [],
      joinedRooms: [],
      messages: []
    }

    // this.subscribeToRoom = this.subscribeToRoom.bind(this)
    // this.sendMessage = this.sendMessage.bind(this)
    // this.subscribeToRoom = this.subscribeToRoom.bind(this)

  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'kyleanderson',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId:'31220080',
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
  }

  render() {
    console.log('this.state.message: ', this.state.messages);
    return (
      <div className="app">
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList  
          messages={this.state.messages}
        />
        <SendMessageForm sendMessage={this.sendMessage} />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
