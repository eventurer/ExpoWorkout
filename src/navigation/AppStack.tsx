import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInPage from "../exercise /SignInPage";
import LogInPage from "../exercise /LogInPage";
import { TouchableOpacity, Text } from "react-native";
import Splash from "../exercise /Splash";
import HomeScreen from "../exercise /HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKey } from "../assets/Constants";
import { StackActions, useNavigation } from "@react-navigation/native";



const Stack = createNativeStackNavigator()

const AppStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            initialRouteName="splash"
        //  screenOptions={{headerShown:false}}
        >

            <Stack.Screen
                name="LogIn"
                component={LogInPage}
                options={{
                    title: 'LogIn',
                    //to change headerbackgroundcolor
                    headerStyle: { backgroundColor: 'tomato' },
                    //to change the backbutton color
                    headerTintColor: 'white',
                    // headerRight:()=>{

                    //     return(
                    //         <TouchableOpacity>
                    //             <Text style={{color:'white',fontSize:20}}>save</Text>
                    //         </TouchableOpacity>
                    //     )
                    // }

                }}


            />
            <Stack.Screen
                name='splash'
                component={Splash}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="SignInPage"
                component={SignInPage}

                options={{
                    title: 'welcome',
                    headerShown: false,


                }}

            />

            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                onPress={() => { AsyncStorage.removeItem(StorageKey.currentUser).then(() => { navigation.dispatch(StackActions.replace('SignInPage')) }) }}
                            >
                                <Text style={{ fontSize: 16, color: 'blue' }}> LogOut</Text>
                            </TouchableOpacity>
                        )
                    }
                }}


            />
        </Stack.Navigator>
    )
}
export default AppStack