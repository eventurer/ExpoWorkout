import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";
import { StorageKey } from "../assets/Constants";
import { useEffect, useState } from "react";


const HomeScreen = () => {
  const [currentUser, setCurrentUser] = useState<undefined|any>()
  const navigation = useNavigation()
  useEffect(() => {

    AsyncStorage.getItem(StorageKey.currentUser)
      .then(
        value => {
          setCurrentUser(JSON.parse(value))
          console.log(value)
        }
      )
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ alignSelf: 'center', fontSize: 20 }}>Details</Text>
      </View>


      {
        currentUser ?
          <View style={{ alignItems: 'center', flex: 9, paddingStart: 20, rowGap: 10 }}>

            <View style={{ flexDirection: 'row' }}>

              <Text style={{ flex: 1 }}>Name:</Text>


              <Text style={{ flex: 2 }}>{currentUser.name}</Text>

            </View>


            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: 1, }}>
                <Text>Email:</Text>
              </View>

              <View style={{ flex: 2 }}>
                <Text>{currentUser.email}</Text>
              </View>

            </View>


            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: 1 }}>
                <Text>PhoneNo:</Text>
              </View>

              <View style={{ flex: 2 }}>
                <Text>{currentUser.phone}</Text>
              </View>

            </View>


            <View style={{ flexDirection: 'row' }}>

              <View style={{ flex: 1 }}>
                <Text>DateOfBirth:</Text>
              </View>

              <View style={{ flex: 2 }}>
                <Text>{currentUser.age}</Text>
              </View>

            </View>

          </View>
          : null
      }


    </View>
  )

}
export default HomeScreen