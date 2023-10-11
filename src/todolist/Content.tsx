import { View, Text, FlatList, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Images, StorageKey } from '../assets/Constants';
import React, { useEffect, useState } from 'react';
import DateToString from '../utils/Funaction';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';

const Content = () => {
    const [list, setList] = useState([])
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    useEffect(() => {
        AsyncStorage.getItem(StorageKey.listTask).then((value) => {
            if (value != null) {
                setList(JSON.parse(value))
            }
            else {
                setList([])
            }
        })
    }, [isFocused])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {

                return (
                    <View style={{ flexDirection: 'row', columnGap: 10 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('ListAdd') }}

                        >

                            <Image resizeMode='contain' style={{ height: 25, width: 25, tintColor: 'white' }}
                                source={Images.Add}
                            />


                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {

                                navigation.navigate('Profile')
                            }
                            }

                        >

                            <Image resizeMode='contain' style={{ height: 25, width: 25, tintColor: 'white' }}
                                source={Images.Profile}
                            />


                        </TouchableOpacity>
                    </View>


                )
            }
        })

    }, [])

    const RenderRightActions = ({ progress, dragX, index }) => {


        const trans = dragX.interpolate({
            inputRange: [-101, -100, -30, 0],
            outputRange: [-10, -10, 0, 40],
        });
        return (
            <Animated.View
                style={[
                    {
                        justifyContent: 'center',
                        transform: [{ translateX: trans }],
                    },
                ]}>
                <View>
                    <TouchableOpacity onPress={() => {
                        list.splice(index, 1)
                        AsyncStorage.setItem(StorageKey.listTask, JSON.stringify(list))
                        setList(

                            [...list]

                        )

                    }}>


                        <Image resizeMode='contain' style={{ height: 30, width: 30, }}
                            source={Images.Delete}

                        />
                    </TouchableOpacity>
                </View>

            </Animated.View>
        );
    };
    return (

        <View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                <Text style={{ color: '#ffbd00', fontSize: 20 }}>Please Add Task To Display..!</Text>

            </View>
            <View style={{}}>

                <FlatList
                    contentContainerStyle={{ paddingStart: 16, paddingEnd: 16 }}
                    data={list}
                    renderItem={({ item, index }) => {
                        return (
                            <Swipeable renderRightActions={(progress, dragX) => {
                                return (
                                    <RenderRightActions progress={progress}
                                        dragX={dragX}
                                        index={index} />
                                )
                            }}>
                                <View style={style.displaybox}
                                >
                                    <TouchableOpacity onPress={() => {

                                        navigation.navigate('ListAdd', { id: index, ...item })

                                    }

                                    }>
                                        <Text>{item.task}</Text>
                                        <Text>{item.text}</Text>
                                        <Text>{DateToString(item.date)}</Text>
                                    </TouchableOpacity>
                                </View>
                            </Swipeable>

                        )
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ height: 10 }} />
                        )
                    }}


                />

            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        displaybox: {
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#00000010',

        }
    }
)

export default Content