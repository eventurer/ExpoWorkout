import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKey } from '../assets/Constants'




const Profile = ({ nav }) => {
    const [currentUser, setCurrentUser] = useState<undefined | any>(null)
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation()
    useEffect(() => {

        AsyncStorage.getItem(StorageKey.logIn)
            .then(
                value => {
                    setCurrentUser(JSON.parse(value))

                }
            )
    }, [])

    return (
        <View style={{ flex: 1 }}>


            {
                currentUser ?
                    <>
                        <View style={{ alignItems: 'center', justifyContent: 'center', margin: 30 }}>
                            <View style={style.circle}>
                                <Text style={{ fontSize: 20, fontWeight: '700' }}>{currentUser?.name.substring(0, 2).toUpperCase()}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', flex: 4, paddingStart: 20, rowGap: 10 }}>

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


                        </View>
                    </>
                    : null
            }
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    setModalVisible(true)
                }}>

                    <Text style={{ color: '#ffbd00', fontSize: 20 }}>LogOut</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                }}>
                <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <View style={style.modalView}>
                        <Text style={{ alignSelf: 'center', fontSize: 16, color: '#ffbd00', marginStart: 50, marginEnd: 50, marginTop: 10 }}>Are You Sure?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginTop: 20 }}>
                            <TouchableOpacity


                                onPress={() => setModalVisible(false)}>
                                <Text style={style.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                AsyncStorage.multiRemove([StorageKey.listTask, StorageKey.logIn])
                                    .then(() => {
                                        setModalVisible(false)
                                        // setTimeout(() => {
                                        navigation.reset(
                                            {
                                                routes: [{name: 'SignIn'}]
                                            }
                                        )
                                        // }, 0);

                                    }
                                    )
                            }}>
                                <Text style={style.textStyle}>Yes</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </Modal>


        </View>

    )
}
const style = StyleSheet.create(
    {
        circle: {
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: 'rgba(255, 189, 0, 0.4)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalView: {
            backgroundColor: 'white',
            borderRadius: 20,
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

        textStyle: {

            fontWeight: 'bold',
            textAlign: 'center',
        },
    }
)

export default Profile


