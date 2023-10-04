import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKey } from '../assets/Constants'


const Splash = () => {
  const navigation = useNavigation()
  useEffect(() => {
   AsyncStorage.getItem(StorageKey.currentUser).then((storage)=>{
    if (storage != null) {
      navigation.dispatch(StackActions.replace('HomeScreen'))
    }
    else {
      navigation.dispatch(StackActions.replace('SignInPage'))
    }})
  }, [])
  return (

    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <StatusBar hidden={true} />
      <Text style={{ fontSize: 30 }}>Splash</Text>
    </View>
  )
}
export default Splash