import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import AgendaScreen from "./src/Screens/AgendaScreen";
import ScheduleScreen from "./src/Screens/scheduleScreen";
import CalculateScreen from "./src/Screens/calculateScreen";
import ClassScreen from "./src/Screens/classScreen";
import HomeworkScreen from './src/Screens/SubScreen/homeworkScreen';
import TestScreen from './src/Screens/SubScreen/testScreen';
import TeacherScreen from './src/Screens/SubScreen/teacherScreen';
import AddClassScreen from './src/Screens/SubScreen/addClassScreen';

//Crear la variable para la navegacion
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
        <Stack.Screen name="Horario" component={ScheduleScreen} />
        <Stack.Screen name="Calcular" component={CalculateScreen} />
        <Stack.Screen name="Asignatura" component={ClassScreen} />
        <Stack.Screen name="Tareas" component={HomeworkScreen} />
        <Stack.Screen name="Examenes" component={TestScreen} />
        <Stack.Screen name="Profesor" component={TeacherScreen} />
        <Stack.Screen name="Agregar Asignatura" component={AddClassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
