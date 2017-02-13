/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    this.setState({counter: this.state.counter + 1})
  }
  decrease() {
    this.setState({counter: this.state.counter - 1})
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="+1" onPress={this.increase} style={styles.button}/>
        <Text style={styles.counter}>
          {this.state.counter}
        </Text>
        <Button title="-1" onPress={this.decrease} style={styles.button}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
  }
});

AppRegistry.registerComponent('counter', () => counter);
