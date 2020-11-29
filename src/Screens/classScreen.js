import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text} from "react-native";
import {Button, Container} from "native-base";


const ClassScreen=({navigation}) => {
    return(
        <Container>
        <Button rounded onPress={() => {navigation.navigate("Agregar Asignatura")}}>
            <Text>Agregar Asignatura</Text>
        </Button>           
    </Container>
    );
}

const styles = StyleSheet.create({

})


export default ClassScreen;