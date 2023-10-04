import React, {Component} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

class SampleComponent extends Component {
  
  constructor(props){
    super(props);
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  
  render(){
    return(
      <SafeAreaView>
        <Text>sample component</Text>
      </SafeAreaView>
    )
  }
}



class ClassLcycle extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      message: 'hello world', 
      unMount: false
    }
  }
  

  componentDidMount() {
    // fetch('http://172.21.4.152:8585/getMessage')
    //   .then(response => response.json())
    //   .then(data => this.setState({ message: data.message })); // data.message = 'updated message'
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true
  }
  componentDidUpdate(prevProps, prevState, snapshot?){
    console.log(prevState,'\nnext\n',this.state)

  }
  render(){
    return(
      <SafeAreaView>
      <View>
        {/* 'updated message' will be rendered as soon as fetch return data */}
        <Text>{this.state.message}</Text>
        <TouchableOpacity onPress={()=>{
          this.setState({
            unMount: true
          })
        }}>
          <Text>unmount sample component</Text>
        </TouchableOpacity>
        {
          !this.state.unMount ? <SampleComponent />: null
        }
        
      </View>
      </SafeAreaView>
  
    )
  }
}

export default ClassLcycle;