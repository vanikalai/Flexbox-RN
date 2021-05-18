/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Basic from './components/Basiccomponents';
import Flex from './components/flex';

AppRegistry.registerComponent(appName, () => Basic);

