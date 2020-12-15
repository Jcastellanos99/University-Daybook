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
                                <Segment style={styles.segment}>
                                    <CardItem style={{borderRadius:20, backgroundColor:"#rgba(38, 196, 164, 0.70)", width:width*0.10}}>

                                    </CardItem>
                                    <CardItem style={styles.cardItem}>
                                        <Text style={styles.resumen}>{asignatura.name}</Text>
                                    </CardItem> 
                                </Segment>                             
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
    cardItem:
    {
        backgroundColor: "#fff",
        flex:1,  
        borderRadius:20,
        borderBottomColor: "#fff",
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
        marginTop: width*-0.10,
        marginLeft: width*0.50,
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