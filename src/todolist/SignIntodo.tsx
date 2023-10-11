import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { StorageKey } from '../assets/Constants'
import { StackActions, useNavigation } from '@react-navigation/native'


const SignIntodo = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const resigter = () => {
        AsyncStorage.getItem(StorageKey.signIn).then((value) => {
            var newdata = []
            if (value != null) {
                newdata = JSON.parse(value)
            }


            if (name && user && password && email) {
                AsyncStorage.setItem(StorageKey.signIn, JSON.stringify([...newdata, { name: name, user: user, password: password, email: email }]))
                    .then(() => {
                        AsyncStorage.setItem(StorageKey.logIn, JSON.stringify({ name: name, user: user, password: password, email: email }))
                            .then(() => {
                                navigation.navigate('Content')
                            })
                    }
                    )
            }
            else {
                setModalVisible(true)
            }
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <StatusBar style='light'/> */}
            <StatusBar barStyle='light-content' />

            <KeyboardAvoidingView behavior='height'>
                <ScrollView>

                    <View>

                        <TextInput placeholder='FirstName:'
                            placeholderTextColor={'grey'}
                            onChangeText={setName}
                            style={style.textbox}
                        />
                        <TextInput placeholder='Email:'
                            placeholderTextColor={'grey'}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                            style={style.textbox}
                        />
                        <TextInput placeholder='UserName:'
                            placeholderTextColor={'grey'}
                            onChangeText={setUser}
                            style={style.textbox}
                        />
                        <TextInput placeholder='Pasword:'
                            placeholderTextColor={'grey'}
                            onChangeText={setPassword}
                            style={style.textbox}
                        />


                        
                        <View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {

                                }}>

                                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                                    <View style={style.modalView}>
                                        <Text style={{ alignSelf: 'center', fontSize: 16, color: '#ffbd00' }}>Please Enter Full Detail!</Text>
                                        <TouchableOpacity
                                            style={[style.button, style.buttonClose]}
                                            onPress={() => setModalVisible(false)}>
                                            <Text style={style.textStyle}>OK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </Modal>

                        </View>
                    </View>


                   
                </ScrollView>
            </KeyboardAvoidingView>
            <TouchableOpacity style={style.touch}
                            onPress={() => {
                                resigter()
                            }}
                        >
                            <Text style={{ fontSize: 20 }}>SignUp</Text>
                        </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'flex-end', margin: 10 }}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 20 }}>Already Have Account?  </Text>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('CheckIn')}}
                                style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#ffbd00', fontSize: 20 }}>LogIn</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

        </SafeAreaView >


    )

}
const style = StyleSheet.create({
    textbox: {
        margin: 10,
        backgroundColor: '#00000010',
        alignItems: 'center',
        padding: 10,

        borderRadius: 20
    },
    touch: {
        alignSelf: 'center',


        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 10

    },
    modalView: {
        alignSelf: 'center',

        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#eeeeee',
    },
    textStyle: {
        paddingStart: 10,
        paddingEnd: 10,

        fontWeight: 'bold',
        textAlign: 'center',
    },

})
export default SignIntodo