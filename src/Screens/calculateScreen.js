import { Content, Form, Icon } from "native-base";
import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Dimensions,Image} from "react-native";
import {Button,
    Container,
    Segment,
    Card,
    CardItem,
    Body,
    H1,
    Textarea,
    note
} from "native-base";
const { width, height} = Dimensions.get("window");

const CalculateScreen=({navigation}) => {
    return(
        <Container style={styles.container}>
        <Card style={styles.buttonCard}>
            <CardItem  style={styles.buttonCardItem}>
                    <Text style={styles.buttonTextFirst}>Calificaciones</Text>
            </CardItem>
            <CardItem style={styles.buttonCardItem}>
            <Text style={styles.buttonTextSecond}>Se muestra la nota final a obtener para aprobar</Text>
            </CardItem>
            <CardItem style={styles.buttonCardItem}>
                    <Text style={styles.textparcial}>Parcial I</Text>
                    <Textarea
                    rowSpan={1}
                    bordered
                    placeholder="Ingresa la nota"
                    style={styles.ingresanota}
                    />
            </CardItem>
            <CardItem  style={styles.buttonCardItem}>
                    <Text style={styles.textparcial1}>Parcial II</Text>
                    <Textarea
                    rowSpan={1}
                    bordered
                    placeholder="Ingresa la nota"
                    style={styles.ingresanota1}
                    />
                
            </CardItem>
            <CardItem  style={styles.buttonCardItem}>
                    <Text style={styles.textparcial2}>Parcial III</Text>
                    <Textarea
                    rowSpan={1}
                    bordered
                    placeholder="Ingresa la nota"
                    style={styles.ingresanota2}
                    />
            </CardItem>

            <CardItem  style={styles.buttonCardItem}>
                    <Button rounded onPress={() => {navigation.navigate("Calcular")}} style={styles.button}>
                        <Icon style={styles.icon} name="calculator"/>
                        <Text style={styles.buttonTextCalcular}>Calcular</Text>
                    </Button>
            </CardItem>
            <CardItem  style={styles.buttonCardItem}>
                    <Text style={styles.buttonTextCalcular}>Calcular</Text>
            </CardItem>
        </Card>
        <CardItem  style={styles.buttonCardItem}>
            <Image source={require("../../assets/imagencalcular.png")} style={styles.calcularImage}/>
 
        </CardItem>
    </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor : "#F0ECEC",
    },
    buttonCard:
    {
       width:width*0.98, 
       height:height*0.40,
       //backgroundColor: "#fff",
       borderRadius:20,
       marginTop: height * 0.01,
       marginLeft:width*0.01, 
       marginRight:width*0.01,
    },
    calcularImage: 
    {
        marginLeft: width * -0.210,
        marginRight: width * 0.14,
    },
    buttonCardItem:
    {
        
        backgroundColor: "#fff",
        marginTop: height * 0.08,
        marginBottom: height * 0.03,
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
    },
   
    button:
    {
        flex: 1,
        backgroundColor: "#rgb(38, 196, 164)",
        width: width * 0.4,
        height: height * 0.0800,
        marginTop: height * -0.45,
    },
    icon:
    {
        color: "#000",
        justifyContent: "center", 
        alignItems: "center",
    },
    buttonTextFirst:
    {
        fontSize: 22,
        color: "#111",
        marginTop: height * -0.11,
        marginLeft: width * 0.30,
        marginRight: width * 0.15,
    },
    buttonTextSecond:
    {
        fontSize: 17,
        color: "#789",
        marginTop: height * -0.30,
        marginLeft: width * 0.00,
        
    },
    buttonTextCalcular:
    {
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.005,
        marginLeft: width * 0.099,
        //marginRight: width * -0.99,
    },
    textparcial:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.450,
        marginLeft: width * -0.005,
    },
    ingresanota:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.450,
        marginLeft: width * 0.0099,
    },
    ingresanota1:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.610,
        marginLeft: width * 0.0099,
    },
    ingresanota2:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.750,
        marginLeft: width * 0.0099,
    },
    textparcial1:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.610,
        marginLeft: width * -0.006,
    },
    textparcial2:{
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.750,
        marginLeft: width * -0.007,
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