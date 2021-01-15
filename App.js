import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import OneScreen from './src/screens/OneScreen';
import ListComponent from './src/screens/ListComponent';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen'
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: OneScreen,
    List: ListComponent,
    Image: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
