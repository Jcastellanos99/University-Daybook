import { Content, Form, Icon } from "native-base";
import React, { useEffect, useState, useContext } from "react";
import {StyleSheet, View, Text, Dimensions} from "react-native";
import {Button,
        Container,
        Segment,
        Card,
        CardItem,
        Body,
        List,
        ListItem
    } from "native-base";

    const { width, height} = Dimensions.get("window");
    
import { TestContext } from "../context/testContext";
import {HomeworkContext} from "../context/homeworkContext";

const HomeScreen=({navigation}) => {

    const {tests} = useContext(TestContext);
    const {homeworks} = useContext(HomeworkContext);

    return(
        <Container style={styles.container}>
            <Card style={styles.buttonCard}>
                <CardItem bordered style={styles.buttonCardItem}>
                    <Segment style={styles.buttonSegment}>
                        <Button rounded onPress={() => {navigation.navigate("Tareas")}} style={styles.button}>
                            <Icon style={styles.icon} name="book"/> 
                        </Button>
                        <Button rounded onPress={() => {navigation.navigate("Horario")}} style={styles.button}>
                            <Icon style={styles.icon} name="calendar"/>
                        </Button>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                    <Segment style={styles.buttonSegment}>
                        <Text style={styles.buttonTextFirst}>Agenda</Text>
                        <Text style={styles.buttonTextFirst}>Calendario</Text>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                    <Segment style={styles.buttonSegment}>
                        <Button rounded onPress={() => {navigation.navigate("Calcular")}} style={styles.button}>
                            <Icon style={styles.icon} name="calculator"/>
                        </Button>
                        <Button rounded onPress={() => {navigation.navigate("Asignatura")}} style={styles.button}>
                            <Icon style={styles.icon} name="create"/>
                        </Button>
                    </Segment>
                </CardItem>
                <CardItem bordered style={styles.buttonCardItem}>
                    <Segment style={styles.buttonSegment}>
                        <Text style={styles.buttonTextSecond}>Calcular</Text>
                        <Text style={styles.buttonTextSecond}>Asignaturas</Text>
                    </Segment>
                </CardItem>
            </Card>
            <Text style={styles.resumen}>Pendientes</Text> 
                        <Content>
                            <List>
                            {tests
                            ? tests.map((test) =>(
                                <ListItem key={test.idExamen.toString()}>
                                    <Card style={styles.card}>
                                            <CardItem style={styles.cardItem}>
                                                    <Text style={styles.resumen}>{test.name }</Text>
                                            </CardItem>                
                                    </Card>
                                </ListItem>
                            ))
                        : null}
                        </List>
                        <List>
                    {homeworks
                    ? homeworks.map((homework) =>(
                        <ListItem key={homework.idtarea.toString()}>
                            <Card style={styles.card}>
                                    <CardItem style={styles.cardItem}>
                                            <Text style={styles.resumen}>{homework.name }</Text>
                                    </CardItem>                              
                            </Card>
                        </ListItem>
                    ))
                : null}
                </List>
                </Content>
                <Button rounded onPress={() => {navigation.navigate("Tareas")}} style={styles.MostrarButton}>
                    <Text style={styles.cardText}>Mostrar Mas</Text>
                </Button>
        </Container>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor : "#F0ECEC",
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
    buttonCardItem:
    {
        backgroundColor: "#fff",
        marginTop: height * 0.05,
        marginBottom: height * 0.02,
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
        marginBottom:height*0.045,
    },
    button:
    {
        flex:1,
        backgroundColor: "#rgba(38, 196, 164, 0.89)",
        width: width * 0.20,
        height: height * 0.08,
        marginLeft: width * 0.13,
        marginRight: width * 0.13,
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
        marginRight: width * 0.12,
    },
    buttonTextSecond:
    {
        fontSize: 17,
        color: "#000",
        marginTop: height * -0.02,
        marginLeft: width * 0.15,
        marginRight: width * 0.11,
    },
    resumen:
    {
        fontSize: 22,
        color: "#000",
        marginLeft: width * 0.05,
    },
    MostrarButton:
    {
        flex:1,
        backgroundColor: "#rgba(38, 196, 164, 0.89)",
        marginBottom:height*0.01,
        marginRight: width * -0.04,
        width: width,
        height: height * 0.05,
    },
    card:
    {
        width:width*0.90, 
        height:height*0.08,
        backgroundColor: "#fff",
        borderRadius:20,
        marginLeft:width*0.01, 
        marginRight:width*0.01,
    },
    cardItem:
    {
        backgroundColor: "#fff",
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
    },
    cardText:
    {
        fontSize: 20,
    }

})


export default HomeScreen;