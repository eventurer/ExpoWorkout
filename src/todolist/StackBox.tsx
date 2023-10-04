import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Images, StorageKey } from "../assets/Constants";
import { StackActions, useNavigation } from "@react-navigation/native";
import StackNavigation from "../navigation/bottomtab/ScreenStack";
import Content from "./Content";
import ListAdd from "./ListAdd";

const Stack = createNativeStackNavigator()
const StackBox = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator initialRouteName="Content">
            <Stack.Screen
                name="Content"
                component={Content}
                options={{
                    title: 'To-Do List',
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,

                    },


                    headerStyle: {

                        backgroundColor: '#ffbd00',


                    },
                    headerRight: () => {

                        return (
                            <TouchableOpacity 
                            onPress={()=>{navigation.navigate('ListAdd')}}

                            >

                                <Image style={{ height: 40, width: 40, tintColor: 'white' }}
                                    source={Images.Add}
                                />


                            </TouchableOpacity>

                        )
                    }

                }}

            />
            <Stack.Screen
                name="ListAdd"
                component={ListAdd}

            />

        </Stack.Navigator>

    )


}
export default StackBox