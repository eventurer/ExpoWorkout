import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppTabBar from './AppTabBar';
const User =
    [
        {
            name: 'gayu',
            userid: 'gayu01'
        },
        {
            name: 'userA',
            userid: 'user02'

        },
        {
            name: 'userB',
            userid: 'user03'
        },
        {
            name: 'userC',
            userid: 'user04'
        },
        {
            name: 'userD',
            userid: 'user04'
        }

    ]


const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text>Welcome...</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Dashboard')
                }}                          >

                <Text>DashBoard</Text>

            </TouchableOpacity>
        </View>

    )
}

const SecondScreen = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text>upadate your app settings here..! </Text>
        </View>

    )
}

const ThirdScreen = () => {
    return (
        <View>
            <Text>List of person details in map list</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {
                    User.map((value, index) => {
                        return (
                            <View key={index}>
                                <Text>{value.name}</Text>

                            </View>

                        )
                    })
                }
            </View>
            
        </View>
    )
}


const Tab = createBottomTabNavigator();

const MyTab = () => {
    return (
        <Tab.Navigator tabBar={(props) => {
            return (
                <AppTabBar {...props} />
            )
        }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SecondScreen} />
            <Tab.Screen name='Profile' component={ThirdScreen} />
        </Tab.Navigator>
    );
}
export default MyTab
