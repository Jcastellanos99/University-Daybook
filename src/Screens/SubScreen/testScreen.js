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
                                <Segment style={styles.segment2}>
                                    <CardItem style={{borderRadius:20, backgroundColor:"#rgba(38, 196, 164, 0.70)", width:width*0.10}}>

                                    </CardItem>
                                    <CardItem style={styles.cardItem}>
                                       <Item>
                                        <CardItem>
                                            <Text style={styles.resumen}>{test.name}</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Text style={styles.resumen}>{test.clas}</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Text style={styles.resumen}>{test.date}</Text>
                                        </CardItem>
                                        </Item>
                                    </CardItem> 
                                </Segment>                             
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
    cardItem:
    {
        backgroundColor: "#fff",
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
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


export default TestScreen;