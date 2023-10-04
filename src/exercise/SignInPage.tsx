
import { StackActions, useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKey } from '../assets/Constants'

const SignInPage = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [second, setSecond] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [reenterpass, setReenterpass] = useState('')
    const [error, setError] = useState(false)
    const resigter = () => {
        AsyncStorage.getItem(StorageKey.userList).then((value) => {
            var newdata = []
            if (value != null) {
                newdata = JSON.parse(value)
            }

            if (name && second && email && phone && age && password && reenterpass) {
                AsyncStorage.setItem(StorageKey.userList, JSON.stringify([...newdata, { name: name, secname: second, email: email, phone: phone, age: age, password: password, repass: reenterpass }]))
                    .then(() => {
                        AsyncStorage.setItem(StorageKey.currentUser, JSON.stringify({ name: name, secname: second, email: email, phone: phone, age: age, password: password, repass: reenterpass }))
                            .then(() => {
                                navigation.dispatch(StackActions.replace('HomeScreen'))
                            })
                    }
                    )
            }
            else {
                setError(true)
            }
        })
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#273396' }}>
            {/* <StatusBar style='light'/> */}
            <StatusBar barStyle='light-content' />

            <KeyboardAvoidingView behavior='height'>
                <ScrollView>
                    <View>
                        <Text style={{ fontSize: 30, color: 'white', padding: 20, fontStyle: "italic" }}>welcome..</Text>
                    </View>
                    <View>

                        <TextInput placeholder='FirstName:'
                            placeholderTextColor={'white'}
                            onChangeText={setName}
                            style={style.textbox}
                        />
                        <TextInput placeholder='SecondName:'
                            placeholderTextColor={'white'}
                            onChangeText={setSecond}
                            style={style.textbox}
                        />
                        <TextInput placeholder='Email:'
                            placeholderTextColor={'white'}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                            style={style.textbox}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={style.textbox}>
                                <Text style={{ color: 'white' }}>+91</Text>
                            </View>

                            <TextInput placeholder='PhoneNo:'
                                placeholderTextColor={'white'}
                                onChangeText={setPhone}
                                style={{
                                    margin: 10,
                                    backgroundColor: '#4b58a7',
                                    alignItems: 'center',
                                    padding: 10,
                                    color: 'white',
                                    borderRadius: 20,
                                    flex: 1
                                }}
                                keyboardType='numeric'
                            />
                        </View>
                        <TextInput placeholder='DOB:'
                            placeholderTextColor={'white'}
                            onChangeText={setAge}
                            style={style.textbox}
                        />
                        <TextInput placeholder='Password:'
                            placeholderTextColor={'white'}
                            onChangeText={setPassword}
                            style={style.textbox}
                        />
                        <TextInput placeholder='Conform password  :'
                            placeholderTextColor={'white'}
                            onChangeText={setReenterpass}
                            style={style.textbox}
                        />

                        <TouchableOpacity style={style.touch}
                            onPress={() => { resigter() }}
                        >
                            <Text style={{ color: 'white', fontSize: 20 }}>SignUp</Text>
                        </TouchableOpacity>
                        {
                            error ? <Text style={{ color: 'white', backgroundColor: 'red', alignSelf: 'center', fontSize: 16 }}>Please Enter Full Detail</Text> : null
                        }
                    </View>


                    <View style={{ flex: 1, justifyContent: 'flex-end', margin: 10 }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Already Have Account?</Text>
                            <TouchableOpacity
                                onPress={() => { navigation.dispatch(StackActions.replace('LogIn')) }}
                                style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#fe5d31', fontSize: 20 }}>LogIn</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView >


    )

}
const style = StyleSheet.create({
    textbox: {
        margin: 10,
        backgroundColor: '#4b58a7',
        alignItems: 'center',
        padding: 10,
        color: 'white',
        borderRadius: 20
    },
    touch: {
        alignSelf: 'center',
        backgroundColor: '#fe5d31',
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 10

    }

})
export default SignInPage