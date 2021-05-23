import  React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function CallScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Call List</Text>
    </View>
  );
}

function MissedCallScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Missedcalls</Text>
    </View>
  );
}
function FavScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your Favourites!</Text>
      </View>
    );
  }
  function ContactScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List of Contacts</Text>
      </View>
    );
  }
  

const Tab = createMaterialTopTabNavigator();

export default function TopTabView() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="calls" component={CallScreen} />
        <Tab.Screen name="MissedCall" component={MissedCallScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Favourite" component={FavScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
