import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Dimensions} from "react-native";
import {Button, 
        Container,
        Segment,} from "native-base";

const { width, height} = Dimensions.get("window");


const TestScreen=({navigation}) => {
    return(
        <Container style={styles.container}>
            <Segment style={styles.segment}> 
            <Button rounded onPress={() => {navigation.navigate("Tareas")}} style={styles.button}>       
                    <Text style={styles.text}>
                        Tareas
                        </Text>	                    
                </Button>	                
                <Button rounded onPress={() => {navigation.navigate("Examenes")}} style={styles.button}>                
                    <Text style={styles.text}>	                    
                        Examenes	
                    </Text>	
                </Button>	               
            </Segment>                
        </Container>
    );
}

const styles = StyleSheet.create({
    button:
    {
        flex: 1,
        width: width * 0.5,
        fontFamily: "FontAwesome",
        fontSize: 50,
        borderBottomColor: "#rgba(38, 196, 164, 0.70)",
        marginLeft: 15,
        marginHorizontal: 15,
    },
    segment:
    {
        backgroundColor: "#F0ECEC",
    },
    container:{
        backgroundColor : "#F0ECEC",
    },

})


export default TestScreen;