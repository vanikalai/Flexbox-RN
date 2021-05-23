/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BackhandlerExample from './components/Backhandler';
import Basic from './components/Basiccomponents';
import DrawerlayoutExample from './components/DrawerLayout';
import DrawerNav from './components/DrawerNavigation';
import FlatListExample from './components/FlatList';
import Flex from './components/flex';
import Andriodpermissions from './components/HandlingPermissions';
import ModalExample from './components/Modal';
import RegularFeatures from './components/OtherFeatures';
import RefreshControlExample from './components/RefreshControl';
import SectionListexample from './components/SectionList';
import TabNav from './components/TabNavigation';
import ToastExample from './components/Toast';
import TopTabView from './components/TopTabView';
import UserInterface from './components/UserInterface';

AppRegistry.registerComponent(appName, () => TopTabView);

