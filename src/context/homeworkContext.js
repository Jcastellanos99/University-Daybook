import React, {useEffect, createContext, useState} from "react";
import { database } from "../components/db";

//Crear el contexto de las tareas
export const HomeworkContext = createContext({});

export const HomeworkContextProvider = (props) => {
    //Obtener los valores iniciales para el contexto desde los props

    const {homeworks: initialHomeworks, children} = props;

    //Almacenar los valores en el estado
    const [homeworks, setHomeworks] = useState(initialHomeworks);
    //const [Asignatura, setAsignatura] = useState("");

    //Cargar u obtener las tareas
    useEffect(() => {
        refreshHomework();
    }, []);

    const refreshHomework = () => {
        return database.getHomework(setHomeworks);
    };

    const addNewHomework = async (name, clas, details, date) => {
        await database.insertHomework(name, clas, details, date);
        return refreshHomework();
    };

    //Crear el objeto de contexto
    const homeworkContext = {
        homeworks,
        addNewHomework,
    };

    //Pasar los valores al proveedor y retornarlos
    return (
        <HomeworkContext.Provider value={homeworkContext}>
          {children}
        </HomeworkContext.Provider>
    );
};