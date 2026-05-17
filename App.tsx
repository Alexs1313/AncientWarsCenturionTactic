import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import StackkNav from './app/routes/StackkNav.tsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackkNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
