import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {fcmService} from './src/services/FCMService';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {navigationRef} from './src/services/NavigationService'
import Icon from 'react-native-vector-icons/FontAwesome';
import landingComponent from './src/components/landingComponent';
import CreateEventComponent from './src/components/CreateEventComponent';
import loginComponent from './src/components/loginComponent';
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App () {
  
  const authInfo = useSelector((state) => state.authInfo);
  
  useEffect(() => {
    fcmService.registerAppWithFCM()
    fcmService.register(onRegister, onNotification, onOpenNotification)

    function onRegister(token) {
      console.log("[App] onRegister: ", token)
    }

    function onNotification(notify) {
      console.log("[App] onNotification: ", notify)
      alert("Event: " + notify.notification.body);
    }

    function onOpenNotification(notify) {
      console.log("[App] onOpenNotification: ", notify)
      alert("Open Notification: " + notify.body)
    }

    return () => {
      console.log("[App] unRegister")
      fcmService.unRegister()
    }

  }, []);
  
  
    return (
      <View style={{flex: 1}}>
        {!authInfo.isLogin?
        <View style={{flex: 1}}>
          <NavigationContainer ref={navigationRef}> 
            <Stack.Navigator>
              <Stack.Screen name="login" options={{headerShown: false}}component={loginComponent} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      :
        <View style={{flex: 1}}>
          <NavigationContainer ref={navigationRef}> 
            <Tab.Navigator>
              <Tab.Screen 
              options={{
                tabBarIcon: ({color}) => <Icon  name="calendar" size={30} color={color} />,
                title: "Events"
              }}
              name="landing" children={landingComponent} />
              <Tab.Screen
              options={{
                tabBarIcon: ({color}) => <Icon name="edit" size={30} color={color} />,
                  title: "Create"
              }}
              name="create" component={CreateEventComponent} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>}
      </View>
    )
}