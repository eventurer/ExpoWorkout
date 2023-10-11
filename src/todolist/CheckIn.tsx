import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import { StorageKey } from '../assets/Constants'
import { CommonActions, StackActions, useNavigation } from '@react-navigation/native'


const CheckIn = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [userlist, setUserlist] = useState([])
    const navigation = useNavigation()

    //to get the sigin  all list
    useEffect(() => {
        AsyncStorage.getItem(StorageKey.signIn)
            .then(
                value => {
                    setUserlist(JSON.parse(value))//stores the siginlist in setstate
                })
    }, [])
    const newarray = () => {
        return userlist.filter((item) => item.user === user && item.password === password)  //create a function to check currentuser placed in siginlist
    }
    const login = () => {
        if (user && password) {
            const checkedarray = newarray()


            if (checkedarray.length != 0) {
                AsyncStorage.setItem(StorageKey.logIn, JSON.stringify(checkedarray[0]))  //
                    .then(() => {
                        navigation.dispatch(CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Content'}]
                        }))
                    }
                    )


            }
            else {
                setMessage('Please Enter Valid Email or Password!!')

            }
        }
        else {
            setMessage('Enter Details')

        }
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginStart: 20, marginEnd: 20 }}>
                <TextInput style={style.TextBox}
                    placeholderTextColor={'grey'}
                    onChangeText={(text) => {
                        message && setMessage('')
                        setUser(text)
                    }}

                    placeholder='UserName'

                />
                <TextInput style={style.TextBox}
                    placeholderTextColor={'grey'}
                    onChangeText={(text) => {
                        message && setMessage('')
                        setPassword(text)

                    }}
                    placeholder='Password'
                />

            </View>
            <View style={{ marginTop: 30, alignItems: 'center' }}>

                <TouchableOpacity style={{ padding: 10, borderRadius: 20 }}
                    onPress={() => { login() }}>
                    <Text style={{ fontSize: 20 }}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-evenly', marginTop: 30 }}>
                {
                    message ? <Text style={{ alignSelf: 'center', fontSize: 18, }}>{message}</Text> : null
                }


            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 20 }}>Don't Have An Account?  </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Text style={{ color: '#ffbd00', alignSelf: 'center', fontWeight: '600', fontSize: 20 }}>SignIn</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    TextBox: {


        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000010',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10

    }
})


export default CheckIn