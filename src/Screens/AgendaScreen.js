import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text} from "react-native";
import {Button, Container} from "native-base";


const AgendaScreen=({navigation}) => {
    return(
        <Container>
            <Button rounded onPress={() => {navigation.navigate("Tareas")}}>
                <Text>Tareas</Text>
            </Button>
            <Button rounded onPress={() => {navigation.navigate("Examenes")}}>
                <Text>Examenes</Text>
            </Button>
            <Button rounded onPress={() => {navigation.navigate("Profesor")}}>
                <Text>Profesor</Text>
            </Button>            
        </Container>
    );
}

const styles = StyleSheet.create({

})


export default AgendaScreen;