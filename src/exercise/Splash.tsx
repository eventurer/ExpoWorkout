
import { useEffect } from 'react'
import { View, Image, Text, StatusBar } from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKey } from '../assets/Constants'


const Splash = () => {
  const navigation = useNavigation()
  useEffect(() => {
    AsyncStorage.getItem(StorageKey.logIn).then((storage) => {
      if (storage != null) {
        navigation.dispatch(StackActions.replace('Content'))
      }
      else {
        navigation.dispatch(StackActions.replace('SignIn'))
      }
    })
  }, [])
  return (

    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <StatusBar hidden />
      
    </View>
  )
}
export default Splash