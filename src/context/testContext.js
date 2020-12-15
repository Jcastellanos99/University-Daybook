import React, {useEffect, createContext, useState} from "react";
import { database } from "../components/db";

//Crear el contexto de las clases
export const TestContext = createContext({});

export const TestContextProvider = (props) => {
    //Obtener los valores iniciales para el contexto desde los props

    const {tests: initialTest, children} = props;

    //Almacenar los valores en el estado
    const [tests, setTests] = useState(initialTest);
    //const [Asignatura, setAsignatura] = useState("");

    //Cargar u obtener las clases
    useEffect(() => {
        refreshTest();
    }, []);

    const refreshTest = () => {
        return database.getTest(setTests);
    };

    const addNewTest = async (name, clas, details, date) => {
        await database.insertTest(name, clas, details, date);
        return refreshTest();
    };

    //Crear el objeto de contexto
    const testContext = {
        tests,
        addNewTest,
    };

    //Pasar los valores al proveedor y retornarlos
    return (
        <TestContext.Provider value={testContext}>
          {children}
        </TestContext.Provider>
    );
};