import {Container, 
    Content, 
    Fab, 
    List, 
    ListItem, 
    Icon, 
    Body,
    Card,
    CardItem,
    Segment,
    Item,
    Right,
    Button,
    Header
    } from "native-base";
import React, {useContext, 
           useEffect, 
           useState } from "react";
import {StyleSheet, 
    View, 
    Text,
    Dimensions,
    } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height} = Dimensions.get("window");

//Importar el contexto de las clases
import { HomeworkContext } from "../context/homeworkContext";

const AgendaScreen=({navigation}) => {
    const {homeworks} = useContext(HomeworkContext);

    return(
        <Container style={styles.container}>
            <Segment style={styles.segment}> 
            <Button rounded onPress={() => {navigation.navigate("Agregar Tarea")}} style={styles.button}>       
                    <Text style={styles.text}>
                        Agregar Tareas
                        </Text>	                    
                </Button>	                
                <Button rounded onPress={() => {navigation.navigate("Examenes")}} style={styles.button}>                
                    <Text style={styles.text}>	                    
                        Examenes	
                    </Text>	
                </Button>	               
            </Segment> 
            <Content>
                <List>
                    {homeworks
                    ? homeworks.map((homework) =>(
                        <ListItem key={homework.idtarea.toString()}>
                            <Card style={styles.card}>
                                    <CardItem style={styles.cardItem1}>
                                            <Text style={styles.resumen}>{homework.name }</Text>
                                    </CardItem>
                                    <CardItem style={styles.cardItem2}>
                                            <Text style={styles.resumenAdd}>{homework.clas }</Text>
                                    </CardItem> 
                                    <CardItem style={styles.cardItem3}>
                                            <Text style={styles.resumenAdd}>{homework.date }</Text>
                                    </CardItem>                              
                            </Card>
                        </ListItem>
                    ))
                : null}
                </List>               
            </Content>               
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
    card:
    {
        width:width*0.90, 
        height:height*0.15,
        backgroundColor: "#rgba(38, 196, 164, 0.89)",
        borderRadius:20,
        marginLeft:width*0.01, 
        marginRight:width*0.01,
    },
    cardItem1:
    {
        backgroundColor: "#fff",
        height:height*0.05,
        width:width*0.8,
        marginLeft:width*0.1,
        borderTopRightRadius:20,
       
        
    },
    cardItem2:
    {
        backgroundColor: "#fff",
        height:height*0.05,
        width:width*0.8,
        marginLeft:width*0.1,
        
        
    },
    cardItem3:
    {
        backgroundColor: "#fff",
        height:height*0.05,
        width:width*0.8,
        marginLeft:width*0.1,
       
        borderBottomRightRadius:20,
        
    },
    segment2:
    {
        backgroundColor: "#fff",
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
    },
    resumen:
    {
        fontSize: 28,
        color: "#000",
       
    },

})


export default AgendaScreen;