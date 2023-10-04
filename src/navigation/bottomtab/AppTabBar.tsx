import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Images } from '../../assets/Constants'
const Bottomicon = [Images.Home, Images.Setting, Images.User]
const AppTabBar = ({ state, descriptors, navigation }) => {
    console.log(state)
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {

                const label = route.name;

                const isFocused = state.index === index;
    

                const onPress = () => {

                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        <View style={{ padding: 16, alignItems: 'center' }}>
                            <Image style={{ height: 20, width: 20 ,tintColor:isFocused?'#673ab7':'#222'}}
                                source={Bottomicon[index]} />
                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}



export default AppTabBar

const styles = StyleSheet.create({})