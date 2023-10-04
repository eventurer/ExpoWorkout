import{View,Text, SafeAreaView} from 'react-native';

import FunctionLcycle from './src/exercise /FunctionLcycle';
import ScrollViewComp from './src/exercise /ScrollViewComp';
import SignInPage from './src/exercise /SignInPage';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './src/exercise /Splash';
import MyTab from './src/navigation/bottomtab/BottomNavigation';
import StackNavigation from './src/navigation/bottomtab/ScreenStack';
import StackBox from './src/todolist/StackBox';


const App=()=>{
  return(
    <SafeAreaProvider>
    <NavigationContainer> 
        <StackBox/>
    </NavigationContainer>
    </SafeAreaProvider>

  )
}
export default App