import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import GeneralBoardScreen from './GeneralBoardScreen';
import ImageBoardScreen from './ImageBoardScreen';
import MessageScreen from './MessageScreen';
import ImageScreen from './ImageScreen';

const App = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  GeneralBoard: {
    screen: GeneralBoardScreen
  },
  ImageBoard: {
    screen: ImageBoardScreen
  },
  Message: {
    screen: MessageScreen,
  },
  Image: {
    screen: ImageScreen,
  }
});

AppRegistry.registerComponent('ReactNavigationSample', () => App);