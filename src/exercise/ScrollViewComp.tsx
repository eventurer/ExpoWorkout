import { Text, StyleSheet, View, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import FunctionLcycle from './FunctionLcycle'

const ScrollViewComp = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginBottom: 10 }}>
            <KeyboardAvoidingView behavior='padding'>
                <ScrollView style={styles.scroll} contentContainerStyle={{alignItems:'center'}}>
                    
                        <Text style={[styles.text,{width:100}]}>{'Hi\nGayathri\nFrom\nVillianur'}</Text>
                        <Text style={{ backgroundColor: 'pink', fontSize: 20 }}>
                            {'Component that wraps platform ScrollView while providing integration with touch locking responder system\nKeep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height\nForgetting to transfer down the view stack can lead to errors here, which the element inspector makes quick to debug.'}
                            {'Component that wraps platform ScrollView while providing integration with touch locking "responder" system.Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer down the view stack can lead to errors here, which the element inspector makes quick to debug'}
                        </Text>
                        <FunctionLcycle />
        

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    scroll: {
    
        backgroundColor: "white"
    },
    text: {

        backgroundColor: 'skyblue',
    }


})


export default ScrollViewComp