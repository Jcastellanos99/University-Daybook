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



//Importar el contexto de las clases
import {AsignaturaContext} from "../context/classContext";

const { width, height} = Dimensions.get("window");


const ClassScreen= ({ navigation }) => {
    const {asignaturas} = useContext(AsignaturaContext);

    const nextPage = () => {
        navigation.navigate("Agregar Asignatura");
    }

    console.log(asignaturas);



    return(
        <Container style={styles.container}>
            <Header transparent >                   
                    <Button rounded onPress={(nextPage)} style={styles.button} >
                        <Text style={styles.buttonText}>
                            Agregar Asignatura
                        </Text>
                        <Icon style={{color:"#000"}} name="add"/>
                    </Button>
            </Header>
            <Content>
                <List>
                    {asignaturas
                    ? asignaturas.map((asignatura) =>(
                        <TouchableOpacity onPress={(nextPage)}>
                        <ListItem key={asignatura.idClass.toString()}>
                            <Card style={styles.card}>
                                <CardItem style={styles.cardItem1}>
                                            <Text style={styles.resumen}>{asignatura.name }</Text>
                                    </CardItem>
                                    <CardItem style={styles.cardItem3}>
                                            <Text style={styles.resumenAdd}>{asignatura.details }</Text>
                                    </CardItem>                             
                            </Card>
                        </ListItem>
                        </TouchableOpacity>
                    ))
                : null}
                </List>               
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
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
        height:height*0.08,
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
        height:height*0.07,
        width:width*0.8,
        marginLeft:width*0.1,
       
        borderBottomRightRadius:20,
        
    },
    resumenAdd:
    {
        fontSize: 18,
        color: "#000",
       
    },
    segment:
    {
        backgroundColor: "#fff",
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
    },
    container:{
        backgroundColor : "#F0ECEC",
    },
    resumen:
    {
        fontSize: 28,
        color: "#000",
       
    },
    button:
    {
        borderBottomColor: "#rgba(38, 196, 164, 0.70)",
        backgroundColor : "#F0ECEC",
        flex: 1,
        marginTop: height*-0.10,
        alignContent: "center",
    
    },
    text:
    {
        fontSize: 28,
        marginLeft: width*0.05,
    },
    buttonText:
    {
        fontSize: 15,
        marginLeft: width*0.05,
    }
})


export default ClassScreen;