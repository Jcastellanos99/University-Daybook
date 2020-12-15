import React from 'react';
import { StyleSheet, Text, Dimensions, Image} from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/UseDatabase";
import { AsignaturaContextProvider } from "./src/context/classContext";
import { HomeworkContextProvider } from "./src/context/homeworkContext";
import { TestContextProvider } from "./src/context/testContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import AgendaScreen from "./src/Screens/AgendaScreen";
import ScheduleScreen from "./src/Screens/scheduleScreen";
import CalculateScreen from "./src/Screens/calculateScreen";
import ClassScreen from "./src/Screens/classScreen";
import AddHomeworkScreen from './src/Screens/SubScreen/AddhomeworkScreen';
import TestScreen from './src/Screens/SubScreen/testScreen';
import AddClassScreen from './src/Screens/SubScreen/addClassScreen';
import  AddTestScreen  from "./src/Screens/SubScreen/addTestScreen";
import {Button, Icon} from 'native-base';


//Crear la variable para la navegacion
const Stack = createStackNavigator();

const { width, height} = Dimensions.get("window");


function LogoTitle() {
  return (
    <Image
      source={require("./assets/Daybook.png")}
      style={styles.LogoImage}  
    />
  );
}




export default function App({navigation}) {

  // Prevenir que la pantalla de splash se oculte
  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();

  // Ocultar la pantalla de splash
  if (isLoadingComplete) SplashScreen.hideAsync();


  return (
    <TestContextProvider>
    <HomeworkContextProvider>
    <AsignaturaContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        <Stack.Screen name="homeScreen" component={HomeScreen} 
        options={{headerTitle: props=> <LogoTitle {...props}/>, headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}} />
        <Stack.Screen name="Tareas" component={AgendaScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}/>
        <Stack.Screen name="Horario" component={ScheduleScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}  />
        <Stack.Screen name="Calcular" component={CalculateScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}/>
        <Stack.Screen name="Asignatura" component={ClassScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}/>
        <Stack.Screen name="Examenes" component={TestScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}/>
        <Stack.Screen name="Agregar Asignatura" component={AddClassScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}/>
        <Stack.Screen name="Agregar Tarea" component={AddHomeworkScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}/>
        <Stack.Screen name="Agregar Examen" component={AddTestScreen} options={{headerStyle: {backgroundColor: "#12B191"}, headerTintColor: "#fff"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AsignaturaContextProvider>
    </HomeworkContextProvider>
    </TestContextProvider>
  );
}

const styles = StyleSheet.create({
  LogoImage: 
    {
        width: width,
        height: height * 0.075,
        marginLeft: width*-0.045,
        resizeMode: "contain",
        flex : 1,
        backgroundColor: "#12B191",
    },
    button:
    {
        borderBottomColor: "#rgba(38, 196, 164, 0.70)",
        backgroundColor : "#F0ECEC",
        flex: 1,
        marginTop: width*-0.10,
        marginLeft: width*0.50,
        alignContent: "center",
    
    },
});
