import{View,Text,TextInput} from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const ListAdd=()=>{
    const[task,setTask]= useState('')
    const[text,setText]=useState('')
        return(
             <View style={{}}>
               <TextInput 
                     placeholder='Task Title'
                    onChangeText={setTask}
               />
               <TextInput 
                     placeholder='DesCription'
                    onChangeText={setText}
               />

             </View>
                  


        )
}
export default ListAdd