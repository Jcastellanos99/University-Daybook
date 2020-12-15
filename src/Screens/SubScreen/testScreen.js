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

//Importar el contexto
import { TestContext } from "../../context/testContext";

const { width, height} = Dimensions.get("window");


const TestScreen=({navigation}) => {

    const {tests} = useContext(TestContext);

    return(
        <Container style={styles.container}>
            <Segment style={styles.segment}> 
            <Button rounded onPress={() => {navigation.navigate("Tareas")}} style={styles.button}>       
                    <Text style={styles.text}>
                        Tareas
                        </Text>	                    
                </Button>	                
                <Button rounded onPress={() => {navigation.navigate("Agregar Examen")}} style={styles.button}>                
                    <Text style={styles.text}>	                    
                        Agregar Examenes	
                    </Text>	
                </Button>	               
            </Segment>  
            <Content>
                <List>
                    {tests
                    ? tests.map((test) =>(
                        <ListItem key={test.idExamen.toString()}>
                            <Card style={styles.card}>
                                    <CardItem style={styles.cardItem1}>
                                            <Text style={styles.resumen}>{test.name }</Text>
                                    </CardItem>
                                    <CardItem style={styles.cardItem2}>
                                            <Text style={styles.resumenAdd}>{test.clas }</Text>
                                    </CardItem> 
                                    <CardItem style={styles.cardItem3}>
                                            <Text style={styles.resumenAdd}>{test.date }</Text>
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
    resumenAdd:
    {
        fontSize: 18,
        color: "#000",
       
    },

})


export default TestScreen;