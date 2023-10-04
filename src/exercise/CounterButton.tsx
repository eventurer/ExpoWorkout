import {View,Text,Button}from 'react-native'
import React, {Component} from 'react';


class CounterButton extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    render() {
      return (
        <View>
          <Button
            title="Press me"
            color={this.props.color}
            onPress={() => this.setState(state => ({count: state.count + 1}))}
          />
          <Text>
            Count: {this.state.count}
          </Text>
        </View>
      );
    }
  }
  
  export default CounterButton