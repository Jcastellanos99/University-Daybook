import { Card, CardItem, Input, Button, Content, Container } from "native-base";
import React, { useEffect, useState, useContext } from "react";
import {StyleSheet, View, Text, Dimensions} from "react-native";

const { width, height} = Dimensions.get("window");

import { TestContext } from "../../context/testContext";


const AddTestScreen=({navigation}) => {
    const [name, setName] = useState("");
    const [clas, setClas] = useState("");
    const [details, setDetails] = useState("");
    const [date, setdate] = useState("");
    const [enableSave, setEnableSave] = useState(true);
    const [error, setError] = useState(false)
    const testContext = useContext(TestContext);
    const {addNewTest, refreshTest} = testContext;

    const insertarTest = async () =>{
        if(name){

            await addNewTest(name, clas, details, date, refreshTest);
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
                    <Text style={styles.titulo}>Datos del Examen</Text>
                    </CardItem>
                    <CardItem style={styles.cardtext}>
                        <Text style={styles.text}>Examen</Text>
                    </CardItem>
                    <CardItem style={styles.cardinput}>
                        <Input  placeholder="Examen" value={name} onChangeText={setName} />
                    </CardItem>
                    <CardItem style={styles.cardtext}>
                        <Text style={styles.text}>Asignatura</Text>
                    </CardItem>
                    <CardItem style={styles.cardinput}>
                        <Input  placeholder="Ingrese la asignatura" value={clas} onChangeText={setClas} />
                    </CardItem>
                    <CardItem style={styles.cardtext}>
                        <Text style={styles.text}>Temas</Text>
                    </CardItem>
                    <CardItem style={styles.cardinput}>
                        <Input placeholder="Temas" value={details} onChangeText={setDetails} />
                    </CardItem>
                    <CardItem style={styles.cardtext}>
                        <Text style={styles.text}>Fecha de examen</Text>
                    </CardItem>
                    <CardItem style={styles.cardinput}>
                        <Input placeholder="12/12/2020" value={date} onChangeText={setdate} />
                    </CardItem>
                    <CardItem style={styles.cardItem}>
                        <Button rounded style={styles.MostrarButton} onPress={insertarTest}>
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
        marginTop: height*0.03,
        width:width*0.98, 
        height:height*0.815,
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



export default AddTestScreen;