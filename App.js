import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserInterface from './components/UserInterface';
import Basic from './components/Basiccomponents';

function Dashboard({navigation}) {
  return (
    <View >
      <Text style= {styles.titleTxt}>Components Dashboard </Text>
   
      <Button title="Basic Components" onPress={()=>navigation.navigate('BasicComponents')}/>
          <Button style={styles.btn}  title="User Interface" onPress={()=>navigation.navigate('UserInterface',{
            itemId: 2,
            otherParam: 'Welcome to UserInterface of Core Components',
          })}
         />
        
    </View>
  );
}
// function UserInterface(){
//   return(
//     <View style ={{flex: 1, alignItems:'center',justifyContent:'center'}}>
//       <Text>UserInterface</Text>
//     </View>
//   )
// }
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
       <Stack.Screen name="Home" component={Home} />
      <Stack.Navigator initialRouteName = "Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard}  options={{
          title: 'RN Dashboard',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily:'sans-serif'
          }
        }} />
        <Stack.Screen name="BasicComponents" component={Basic}/>
        <Stack.Screen name="UserInterface" component={UserInterface}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
btn:{
 marginTop:30,
 fontWeight:'bold'
},
titleTxt:{
  fontSize:30
}
});

export default App;