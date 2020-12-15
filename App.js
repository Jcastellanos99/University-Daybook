import React from 'react';
import { StyleSheet, Text} from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/UseDatabase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import AgendaScreen from "./src/Screens/AgendaScreen";
import ScheduleScreen from "./src/Screens/scheduleScreen";
import CalculateScreen from "./src/Screens/calculateScreen";
import ClassScreen from "./src/Screens/classScreen";
import HomeworkScreen from './src/Screens/SubScreen/homeworkScreen';
import TestScreen from './src/Screens/SubScreen/testScreen';
import AddClassScreen from './src/Screens/SubScreen/addClassScreen';

//Crear la variable para la navegacion
const Stack = createStackNavigator();

export default function App() {

  // Prevenir que la pantalla de splash se oculte
 // SplashScreen.preventAutoHideAsync();

 // const isLoadingComplete = useDatabase();

  // Ocultar la pantalla de splash
  //if (isLoadingComplete) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        <Stack.Screen name="homeScreen" component={HomeScreen} options={{headerStyle: {backgroundColor: "#12B191"}}} />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
        <Stack.Screen name="Horario" component={ScheduleScreen} options={{headerStyle: {backgroundColor: "#12B191"}}}  />
        <Stack.Screen name="Calcular" component={CalculateScreen} options={{headerStyle: {backgroundColor: "#12B191"}}}/>
        <Stack.Screen name="Asignatura" component={ClassScreen} options={{headerStyle: {backgroundColor: "#12B191"}}}  />
        <Stack.Screen name="Tareas" component={HomeworkScreen} />
        <Stack.Screen name="Examenes" component={TestScreen} />
        <Stack.Screen name="Agregar Asignatura" component={AddClassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
