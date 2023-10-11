import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, Image, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Images, StorageKey } from "../assets/Constants";
import { StackActions, useNavigation } from "@react-navigation/native";
import Content from "./Content";
import ListAdd from "./ListAdd";
import SignInPage from "../exercise/SignInPage";
import SignIntodo from "./SignIntodo";
import CheckIn from "./CheckIn";
import Profile from "./Profile";
import Splash from "../exercise/Splash";

const Stack = createNativeStackNavigator()
const StackBox = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name='Splash'
                component={Splash}
                options={{
                    headerTitle: ''
                }}

            />
            <Stack.Screen
                name="SignIn"
                component={SignIntodo}
                options={
                    {
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,

                        },
                        headerStyle: {

                            backgroundColor: '#ffbd00',


                        },
                    }}


            />
            <Stack.Screen
                name="CheckIn"
                component={CheckIn}
                options={
                    {
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,

                        },
                        headerStyle: {

                            backgroundColor: '#ffbd00',


                        },
                    }}


            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={

                    {
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            color: 'white',
                            fontSize: 20,

                        },
                        headerStyle: {

                            backgroundColor: '#ffbd00',


                        },
                    }}
            />

            <Stack.Screen
                name="Content"
                component={Content}
                options={{
                    title: 'To-Do List',
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 20,

                    },


                    headerStyle: {

                        backgroundColor: '#ffbd00',


                    },


                }}

            />
            <Stack.Screen
                name="ListAdd"
                component={ListAdd}
                options={{
                    headerTitle: '',
                    headerStyle: { backgroundColor: '#ffbd00' },
                    headerTintColor: 'white',


                }
                }

            />

        </Stack.Navigator>

    )


}
export default StackBox