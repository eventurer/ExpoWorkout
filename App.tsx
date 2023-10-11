
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackBox from './src/todolist/StackBox';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {
  return (

    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer
        >
          <StackBox />
        </NavigationContainer>

      </GestureHandlerRootView>
    </SafeAreaProvider>

  )
}
export default App