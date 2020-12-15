import React, {useEffect, createContext, useState} from "react";
import { database } from "../components/db";

//Crear el contexto de las clases
export const AsignaturaContext = createContext({});

export const AsignaturaContextProvider = (props) => {
    //Obtener los valores iniciales para el contexto desde los props

    const {asignaturas: initialAsignaturas, children} = props;

    //Almacenar los valores en el estado
    const [asignaturas, setAsignaturas] = useState(initialAsignaturas);
    //const [Asignatura, setAsignatura] = useState("");

    //Cargar u obtener las clases
    useEffect(() => {
        refreshAsignatura();
    }, []);

    const refreshAsignatura = () => {
        return database.getAsignatura(setAsignaturas);
    };

    const addNewAsignatura = async (name, score, details) => {
        await database.insertAsignatura(name, score, details);
        return refreshAsignatura();
    };

    //Crear el objeto de contexto
    const asignaturaContext = {
        asignaturas,
        addNewAsignatura,
    };

    //Pasar los valores al proveedor y retornarlos
    return (
        <AsignaturaContext.Provider value={asignaturaContext}>
          {children}
        </AsignaturaContext.Provider>
    );
};