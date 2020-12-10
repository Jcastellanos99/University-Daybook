import { Container, Content, Fab, List, ListItem, Icon } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import {StyleSheet, View, Text} from "react-native";


//Importar el contexto de las notas
import {ClassContext} from "../context/classContext";


const ClassScreen=({navigation}) => {
    const {class_} = useContext(ClassContext);

    return(
        <Container>
            <Content>
                <List>
                    {class_
                    ? class_.map((_class_) =>(
                        <ListItem key={class_.idClass.toString()}>
                            <Text>{class_._class_}</Text>
                        </ListItem>
                    ))
                : null}
                </List>
                <Fab 
                    active={true}
                    position="bottomRight"
                    style={{backgroundColor: "#ff0023"}}
                    direction="up"
                    onPress={() =>{
                        navigation.navigate("classCreate")
                    }}>
                        <Icon name="plus"/>
                    </Fab>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({

})


export default ClassScreen;