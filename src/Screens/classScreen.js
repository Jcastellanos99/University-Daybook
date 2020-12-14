import {Container, 
        Content, 
        Fab, 
        List, 
        ListItem, 
        Icon, 
        Body,
        Card,
        CardItem,
        Segment
        } from "native-base";
import React, {useContext, 
               useEffect, 
               useState } from "react";
import {StyleSheet, 
        View, 
        Text,
        Dimensions} from "react-native";


//Importar el contexto de las notas
import {AsignaturaContext} from "../context/classContext";

const { width, height} = Dimensions.get("window");



const ClassScreen= ({ navigation }) => {
    const {asignaturas} = useContext(AsignaturaContext);


    return(
        <Container style={styles.container}>
            <Content>
                <List>
                    {asignaturas
                    ? asignaturas.map((asignatura) =>(
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
})


export default ClassScreen;