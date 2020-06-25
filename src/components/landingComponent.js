import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EventComponent from './EventComponent';
import HomeComponent from './HomeComponent';
import EditEventComponent from './EditEventComponent';
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
export default function landingComponent() {

    const eventInfo = useSelector((state) => state.eventInfo);

    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeComponent} />
        <Stack.Screen name="Event" options={{headerTitle:eventInfo.title}} component={EventComponent} />
        <Stack.Screen name="Edit" options={{headerTitle:"Edit Event"}} component={EditEventComponent} />
      </Stack.Navigator>
    )
}