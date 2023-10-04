import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Dashboard from "./Dashboard";
import MyTab from "./BottomNavigation";
const Stack = createNativeStackNavigator()
const StackNavigation = () => {

    const navigation = useNavigation()
    return (
        <Stack.Navigator initialRouteName="BottomScreen">

            <Stack.Screen
                name="Dashboard"
                component={Dashboard} />
            <Stack.Screen
             name='BottomScreen'
            component={MyTab}
            options={{
                headerShown:false
            }}
            
            
            />
        </Stack.Navigator>


    )

}
export default StackNavigation