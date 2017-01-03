import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import config from '../config'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.firebase)
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Hello</Text>
      </View>
    )
  }
}

export default App
