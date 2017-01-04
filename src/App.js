import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm'
import config from '../config'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp(config.firebase)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <CardSection>
          {this.renderContent()}
        </CardSection>
      </View>
    )
  }
}

export default App
