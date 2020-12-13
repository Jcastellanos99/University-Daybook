import { Form, Icon } from "native-base";
import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Dimensions,Image} from "react-native";
import {Button,
    Container,
    Segment,
    Card,
    CardItem,
    Body
} from "native-base";
const { width, height} = Dimensions.get("window");

const CalculateScreen=({navigation}) => {
    return(
        <Container style={styles.container}>
            <Card style={styles.buttonCard}>
                <CardItem bordered style={styles.buttonCardItem}>
                <Segment style={styles.buttonSegment}>
                        <Text style={styles.buttonTextFirst}>Calificaciones</Text>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                <Segment style={styles.buttonSegment}>
                <Text style={styles.buttonTextSecond}>Se muestra la nota final a obtener para aprobar</Text>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                <Segment style={styles.buttonSegment}>
                        <Text style={styles.textparcial}>Parcial I</Text>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                <Segment style={styles.buttonSegment}>
                        <Text style={styles.textparcial1}>Parcial II</Text>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                <Segment style={styles.buttonSegment}>
                        <Text style={styles.textparcial2}>Parcial III</Text>
                    </Segment>
                </CardItem>

                <CardItem bordered style={styles.buttonCardItem}>
                    <Segment style={styles.buttonSegment}>
                        <Button rounded onPress={() => {navigation.navigate("Calcular")}} style={styles.button}>
                            <Icon style={styles.icon} name="calculator"/>
                        </Button>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                    <Segment style={styles.buttonSegment}>
                        <Text style={styles.buttonTextFirst}>Calcular</Text>
                    </Segment>
                </CardItem>
                <Image source={require("../../assets/imagencalcular.png")} styles={styles.calcularImage}/>
            </Card>
        </Container>
    );
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor : "#F0ECEC",
    },
    buttonCard:
    {
        
        width:width*0.98, 
        height:height*0.40,
        backgroundColor: "#fff",
        borderRadius:20,
        marginLeft:width*0.01, 
        marginRight:width*0.01,
         

    },
    calcularImage: 
    {
        width: width,
        height: height * 0.5,
    },
    buttonCardItem:
    {
        
        backgroundColor: "#fff",
        marginTop: height * 0.07,
        marginBottom: height * 0.03,
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
    },
    buttonSegment:
    {
        
        flex:1,
        backgroundColor: "#fff",
        marginLeft:width*0.0099, 
        marginRight:width*0.0099, 
        marginTop:height*0.03,
        marginBottom:height*0.03,
    },
    button:
    {
        
        flex:1,
        backgroundColor: "#rgb(38, 196, 164)",
        //width: width * 0.20,
        height: height * 0.10,
        marginTop: height * -0.70,
    },
    icon:
    {
        color: "#000",
        justifyContent: "center", 
        alignItems: "center",
    },
    buttonTextFirst:
    {
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.02,
        marginLeft: width * 0.14,
        marginRight: width * 0.180,
    },
    buttonTextSecond:
    {
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.09,
        marginLeft: width * 0.00,
        
    },
    textparcial:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.17,
        marginLeft: width * -0.70,
    },
    textparcial1:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.23,
        marginLeft: width * -0.70,
    },
    textparcial2:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.28,
        marginLeft: width * -0.70,
    },
    MostrarButton:
    {
        flex:1,
        backgroundColor: "#rgba(38, 196, 164, 0.89)",
        marginLeft: width * -0.04,
        marginRight: width * -0.04,
        width: width,
        height: height * 0.05,
    },
    card:
    {
       
        width:width*0.98, 
        height:height*0.20,
        backgroundColor: "#fff",
        borderRadius:20,
        marginLeft:width*0.01, 
        marginRight:width*0.01,
    },
    cardItem:
    {
        
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
    },
   

})

export default CalculateScreen;