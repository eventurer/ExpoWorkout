import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKey } from '../assets/Constants';
import DateToString from '../utils/Funaction';



const ListAdd = () => {
     const navigation = useNavigation()
     const route = useRoute();
     const [task, setTask] = useState(route.params ? route.params.task : '')
     const [text, setText] = useState(route.params ? route.params.text : '')
     const [date, setDate] = useState(route.params ? new Date(route.params.date) : null)
     const [open, setOpen] = useState(false)
     // const[select,setSelect]=useState(true)
     const [message, setMessage] = useState('')
    
     useEffect(() => {
          if (task && text && date) {
               setMessage('')
          }

     }, [task, text, date])


     return (
          <View style={style.container}>
               <TextInput
                    defaultValue={
                         task
                    }
                    style={style.txtInput}
                    placeholder='Task Title'
                    onChangeText={(task) => {
                         setTask(task)

                    }

                    }
               />
               <TextInput
                    defaultValue={
                         text
                    }
                    multiline={true}
                    style={[style.txtInput]}
                    placeholder='Description'
                    onChangeText={(text) => {
                         setText(text)
                    }}
               />
               <TouchableOpacity style={style.txtInput}
                    onPress={() => {
                         setDate(date)

                         setOpen(true)
                    }} >
                    {/* {
                     select?<Text>Select Date</Text>:<Text>{date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()}</Text>
                    } */}

                    <Text>{date != null ? DateToString(date) : `Select Date`}</Text>


               </TouchableOpacity>
               <TouchableOpacity style={style.button}
                    onPress={
                         () => {
                              if (!(task && text && date)) {
                                   setMessage('Enter details..')
                                   return
                              }
                              AsyncStorage.getItem(StorageKey.listTask)
                                   .then((value) => {




                                        if (route.params) {

                                             const newone = JSON.parse(value)
                                             newone[route.params.id] = { task, text, date }
                                             AsyncStorage.setItem(StorageKey.listTask, JSON.stringify(newone)).then(() => {
                                                  navigation.goBack()
                                             })

                                        }
                                        else {
                                             var newlist = []
                                             if (value != null) {
                                                  newlist = JSON.parse(value)

                                             }

                                             AsyncStorage.setItem(StorageKey.listTask, JSON.stringify([...newlist, { task: task, text: text, date: date }]))
                                                  .then(() => { navigation.goBack() })

                                        }



                                   })
                         }
                    }


               >
                    {
                         route.params ? <Text>Edit</Text> : <Text>Save</Text>
                    }

               </TouchableOpacity>



               <Text style={{ color: 'red' }}>{message}</Text>


               <DatePicker
                    modal={true}
                    mode='date'
                    open={open}
                    date={date ? date : new Date()}
                    onConfirm={(date) => {

                         setOpen(false)
                         setDate(date)
                         // setSelect(false)
                    }}
                    onCancel={() => {
                         setOpen(false)
                    }}
               />

          </View>

     )
}
export default ListAdd

const style = StyleSheet.create({
     container: {
          flex: 1,
          padding: 20,

     },
     txtInput: {
          marginTop: 10,
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#00000010'
     },
     button: { marginTop: 50, alignSelf: 'center', backgroundColor: '#ffbd00', padding: 10, borderRadius: 10 }

})