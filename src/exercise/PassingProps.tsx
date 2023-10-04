import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";


const PassinProps = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.titleview}>
        <Text style={{ fontSize: 20, textTransform: 'uppercase' }}>Data form:</Text>
      </View>

      <View style={style.textbox}>
        <TextInput
          placeholder="name"
          onChangeText={(text) => { setName(text) }}
        />

      </View>
      <View style={style.textbox}>
        <TextInput
          placeholder="age"
          onChangeText={setAge}
          keyboardType="numeric"

        />
      </View>
      <Text style={style.text2}>save item</Text>

      <Second text={name} />
      <Second text={age} />
    </SafeAreaView>
  )

}
const Second = (props) => {
  return (


    <Text style={{ margin: 10, }}>{props.text}</Text>


  )
}

const style = StyleSheet.create({
  titleview: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'

  },
  textbox: {
    borderWidth: 1,
    backgroundColor: 'pink',
    padding: 20,
    margin: 10
  },
  text2:
  {
     alignSelf:'center',
    justifyContent:'center',
    backgroundColor:'skyblue'
  }


})
export default PassinProps