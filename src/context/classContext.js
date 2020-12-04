import React, {useEffect, createContext, useState} from "react";
import { database } from "../components/db";

//Crear el contexto de las clases
export const ClassContext = createContext({});

export const ClassContextProvider = (props) => {
    //Obtener los valores iniciales para el contexto desde los props

    const {class: initialClass, children} = props;

    //Almacenar los valores en el estado
    const [class_, setClass] = useState(initialClass);

    //Cargar u obtener las clases
    useEffect(() => {
        refreshClass();
    }, []);

    const refreshClass = () => {
        return database.getClass(setClass);
    };

    const addNewClass = (class_) => {
        return database.insertClass(class_, refreshClass);
    };

    //Crear el objeto de contexto
    const classContext = {
        class_,
        addNewClass,
    };

    //Pasar los valores al proveedor y retornarlos
    return (
        <NotesContext.Provider value={classContext}>
          {children}
        </NotesContext.Provider>
      );
};