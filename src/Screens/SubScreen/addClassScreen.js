import { Card, CardItem, Input, Button, Container, Content } from "native-base";
import React, { useEffect, useState, useContext } from "react";
import {StyleSheet, View, Text, Dimensions} from "react-native";

const { width, height} = Dimensions.get("window");

import { AsignaturaContext} from "../../context/classContext";


const AddClassScreen=({navigation}) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [details, setDetails] = useState("");
    const [enableSave, setEnableSave] = useState(true);
    const [error, setError] = useState(false)
    const asignaturaContext = useContext(AsignaturaContext);
    const {addNewAsignatura, refreshAsignatura} = asignaturaContext;

    const insertarAsignatura = async () =>{
        if(name){

            await addNewAsignatura(name, score, details, refreshAsignatura);
            navigation.goBack();
        }else {
          setError(true);
        }
            
    }


    // Ejecutar el efecto cuando el valor cambie
    useEffect(() => {
        if (name) setEnableSave(false);
        else setEnableSave(true);
    }, [name]);


    return(
        <Container style={styles.container}>
            <Content>
                 <Card style={styles.card}>
                    <CardItem style={styles.cardtext}>
                    <Text style={styles.titulo}>Datos Basicos</Text>
                    </CardItem>
                    <CardItem style={styles.cardtext}>
                        <Text style={styles.text}>Asignatura</Text>
                    </CardItem>
                    <CardItem style={styles.cardinput}>
                        <Input  placeholder="Nombre de la asignatura" value={name} onChangeText={setName} />
                    </CardItem>
                    <CardItem style={styles.cardtext}>
                        <Text style={styles.text}>Nota</Text>
                    </CardItem>
                    <CardItem style={styles.cardinput}>
                        <Input  placeholder="Nota que espera sacar" value={score} onChangeText={setScore} />
                    </CardItem>
                    <CardItem style={styles.cardtext}>
                        <Text style={styles.text}>Detalles</Text>
                    </CardItem>
                    <CardItem style={styles.cardinput}>
                        <Input placeholder="Detalles" value={details} onChangeText={setDetails} />
                    </CardItem>
                    <CardItem style={styles.cardItem}>
                        <Button rounded style={styles.MostrarButton} onPress={insertarAsignatura}>
                            <Text style={styles.cardText}>Guardar</Text>
                        </Button>
                    </CardItem>
                </Card>

            </Content>
        </Container>
        
    );
}

const styles = StyleSheet.create({
    card:
    {
        marginTop: height*0.1,
        width:width*0.98, 
        height:height*0.667,
        backgroundColor: "#fff",
        borderRadius:20,
        marginLeft:width*0.01, 
        marginRight:width*0.01,
        justifyContent: "center",
        alignContent: "center",
    },
    titulo:
    {
        flex: 1,
        fontSize: 28,
        textAlign: "center",
        color: "#000",
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
    cardItem:
    {
        marginTop: height*0.05,
        height: height*0.20,
        backgroundColor: "#fff",
        flex:1,  
        borderRadius:30,
        borderBottomColor: "#fff",  
    },
    cardText:
    {
        fontSize: 20,
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
    container:{
        backgroundColor : "#F0ECEC",
    },
})


export default AddClassScreen;