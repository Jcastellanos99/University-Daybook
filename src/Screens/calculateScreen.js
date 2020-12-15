import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, Dimensions,Image} from "react-native";
import {Button,
    Container,
    Input,
    Card,
    CardItem,
} from "native-base";
const { width, height} = Dimensions.get("window");

function calculos(op)
{
    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },
    };

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
 
    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado')
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado')
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    //Si se han introducido los números en ámbas cajas, operamos:
        switch(op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado')
                break;
        }
    }
}

const CalculateScreen=({navigation}) => {
    return(
        <Container style={styles.container}>
            <Card style={styles.card}>
                <CardItem style={styles.cardItemTitulo}>
                    <Text style={styles.textFirst}>Calificaciones</Text>
                </CardItem>
                <CardItem style={styles.cardItemTitulo}>
                    <Text>Se muestra la nota a obtener en el tercer parcial para aprobar</Text>
                </CardItem>
                <CardItem style={styles.cardtext}>
                    <Text style={styles.text}>
                        I Parcial
                    </Text>
                </CardItem>
                <CardItem style={styles.cardtext}>
                    <Input type="number" id="num1"  placeholder="Ingrese nota" style={styles.cardinput}/>
                </CardItem>
                <CardItem>
                    <Text style={styles.text}>
                        II Parcial
                    </Text>
                </CardItem>
                <CardItem style={styles.cardtext}>
                <Input type="number" id="num2"  placeholder="Ingrese nota" style={styles.cardinput}/>
                </CardItem>
                <CardItem style={styles.cardtext}>
                    <Text style={styles.text}>
                        III Parcial
                    </Text>
                </CardItem>
                <CardItem>
                    <Input id="resultado"  style={styles.cardinput}/>
                </CardItem>
                <CardItem style={styles.cardItem}>
                <Button rounded style={styles.MostrarButton}  value="SUMAR" onclick="calculos('sumar');">
                    <Text style={styles.cardText}>Calcular</Text>
                </Button>
            </CardItem>
            </Card>
        </Container>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor : "#F0ECEC",
    },
    cardinput:
    {
        width:width*0.90, 
        height:height*0.08,
        backgroundColor: "#F0ECEC",
        borderRadius:15,
        marginLeft:width*0.05, 
        marginRight:width*0.05,
        marginTop: height * -0.03,
    },
    text:
    {
       
        fontSize: 20,
        textAlign: "left",
        color: "#000",
        width: width*0.80,
    },
    cardtext:
    {
        width:width*0.96, 
        height:height*0.10,
        backgroundColor: "#fff",
        borderRadius:20,
        marginLeft:width*0.01, 
        marginRight:width*0.01,
    },
    MostrarButton:
    {
        flex:1,
        backgroundColor: "#rgba(38, 196, 164, 0.89)",
        marginLeft: width * -0.05,
        marginRight: width * -0.05,
        width: width,
        height: height * 0.06,
    },
    cardItem:
    {
        marginTop: height*0.05,
        height: height*0.20,
        backgroundColor: "#fff",
        flex:1,  
        borderRadius:30,
        borderBottomColor: "#fff",  
    },
    textFirst:
    {
        fontSize: 22,
        color: "#111",
        marginTop: height * -0.01,
        marginLeft: width * 0.30,
        marginRight: width * -0.60,
    },
    card:
    {
       
        width:width*0.98, 
        height:height*0.80,
        backgroundColor: "#fff",
        borderRadius:20,
        marginLeft:width*0.01, 
        marginRight:width*0.01,
    },
     cardItemTitulo:
    { 
        borderRadius:20,
        borderBottomColor: "#fff",
        height:height*0.06,
     },
})

export default CalculateScreen;