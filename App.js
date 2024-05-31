import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import IconRick from './assets/icons-rick.png';

import PageOne from './src/Components/PageOne';
import PageTwo from './src/Components/PageTwo';

import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: "#098f09",
            tabBarStyle:{
              backgroundColor: '#202225',
              borderTopWidth: 0,
            }
          }}>
          <Tab.Screen 
            name='Page1' 
            component={PageOne} 
            options={{
              title:'Rick&Morty',
              headerShown: false,
              tabBarIcon: ({color, size}) => {
                return <Image 
                source={IconRick} 
                style={{ width: size, height: size, tintColor: color }}
              />
              }
            }}
            />
          <Tab.Screen 
            name='Page2' 
            component={PageTwo} 
            options={{
              title:'Infos',
              headerShown: false,
              tabBarIcon: ({color, size}) => {
                return <Feather name="file-text" color={color} size={size}/>
              }
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


