import { View, Text, TextInput, StyleSheet, SafeAreaView, Button } from 'react-native'
import { useEffect, useState } from 'react'



const HomeComp = () => {

    useEffect(() => {console.log('homemount')
        return () => { console.log('home unmount') }
    }, [])
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    )
}
const OfficeComp = () => {
    // useEffect(() => { console.log('office mount') }, [])
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Office</Text>
        </View>
    )
}




const FunctionLcycle = () => {
    const [first, setFirst] = useState('1')
    const [second, setSecond] = useState('1')
    const [result, setResult] = useState('0')
    const [isHome, setIshome] = useState(false)
    useEffect(() => {
        console.log('every update')
    }, [])
    useEffect(() => {

        setResult((Number(first) + Number(second)).toString())
    },
        [first]
    )
    useEffect(() => {
        setResult((Number(first) + Number(second)).toString())
    },
        [second]
    )
    // useEffect(() => {
    //     return () => {
    //         console.log('unmount')
    //     }
    // }, [])


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.Box}>
                <TextInput
                    placeholder='First'
                    onChangeText={setFirst}
                    keyboardType='numeric'
                />
            </View>
            <View style={style.Box}>
                <TextInput
                    placeholder='Second'
                    onChangeText={setSecond}
                    keyboardType='numeric'
                />
            </View>
            <Text style={style.Box}>{result}</Text>
            {
                isHome ? <HomeComp /> : <OfficeComp />
            }
            <Button title='switch'
                onPress={() => {
                    setIshome(!isHome)
                }} />

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Box: {
        margin: 10,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    }
})

export default FunctionLcycle;