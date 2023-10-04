import { StackActions } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKey } from '../assets/Constants'

const LogInPage = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [userlist, setUserlist] = useState([])

    //to get the sigin  all list
    useEffect(() => {
        AsyncStorage.getItem(StorageKey.userList)
            .then(
                value => {
                    setUserlist(JSON.parse(value))//stores the siginlist in setstate
                })
    }, [])
    const newarray = () => {
        return userlist.filter((item) => item.email === email && item.password === password)  //create a function to check currentuser placed in siginlist
    }
    const login = () => {
        if (email && password) {
            const checkedarray = newarray()


            if (checkedarray.length != 0) {
                AsyncStorage.setItem(StorageKey.currentUser, JSON.stringify(checkedarray[0]))  //
                    .then(navigation.dispatch(StackActions.replace('HomeScreen')))

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
                    onChangeText={(text) => {
                        message && setMessage('')
                        setEmail(text)
                    }}
                    keyboardType='email-address'
                    placeholder='Email'

                />
                <TextInput style={style.TextBox}
                    onChangeText={(text) => {
                        message && setMessage('')
                        setPassword(text)

                    }}
                    placeholder='Password'
                />

            </View>
            <View style={{ marginTop: 30, alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'tomato', padding: 10, borderRadius: 20 }}
                    onPress={() => { login() }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-evenly', marginTop: 30 }}>
                {
                    message ? <Text style={{ alignSelf: 'center', fontSize: 18, color: 'red' }}>{message}</Text> : null
                }


            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text style={{ alignSelf: 'center' }}>Don't Have An Account? </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.dispatch(StackActions.replace('SignInPage')) }}>
                        <Text style={{ color: 'tomato', alignSelf: 'center', fontWeight: '600' }}>SignInPage</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    TextBox: {

        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20

    }
})
export default LogInPage