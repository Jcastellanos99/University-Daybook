import { Form } from "native-base";
import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text} from "react-native";
import {Button, Container} from "native-base";


const HomeScreen=({navigation}) => {
    return(
        <Container>
            <Button rounded onPress={() => {navigation.navigate("Agenda")}}>
                <Text>Agenda</Text>
            </Button>
            <Button rounded onPress={() => {navigation.navigate("Horario")}}>
                <Text>Horario</Text>
            </Button>
            <Button rounded onPress={() => {navigation.navigate("Calcular")}}>
                <Text>Calcular</Text>
            </Button>
            <Button rounded onPress={() => {navigation.navigate("Asignatura")}}>
                <Text>Asignatura</Text>
            </Button>
            
        </Container>
    );
}

const styles = StyleSheet.create({

})


export default HomeScreen;