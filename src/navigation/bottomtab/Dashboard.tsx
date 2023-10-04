import { View, Text ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Dashboard = () => {
    const navigation=useNavigation()
    return (
          
        <View style={{alignItems:'center',justifyContent:"center",flex:1}}>
           <Text>DashBoard</Text>
        
        <TouchableOpacity  
               onPressIn={()=>{
               
                navigation.navigate('Settings')
                
            }}
        
        >

          <Text>Settings</Text>            
        </TouchableOpacity>



        </View>

)

}
export default Dashboard 