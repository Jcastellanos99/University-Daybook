import React from "react";
import * as SQLite from "expo-sqlite";

//Crea y abre la base de datos
const db = SQLite.openDatabase("universityDaybook.bd");

//Obtiene las clases del usuario
const getClass = (setClassFunc) => {
    db.transaction((tx) => {
        tx.executeSql(
            "select * from class",
            [],
            (_, {row: {_array }}) => {
                setClassFunc(_array);
            },
            (_t, error) => {
                console.log("Error al momento de obtener las asignaturas");
                console.log(error);
            },
            (_t, _success) => {
                console.log("Asignaturas Obtenidas");
            }
        );
    });
};

//Insertar clases
const insertClass = (class_, successFunc) => {
    db.transaction((tx) => {
        tx.executeSql("insert into class (class, name, score, details) values (?,?,?,?)", [
            class_,
            "Nueva",
        ]);
    },
    (_t, error) => {
        console.log("Error al insertar asignatura");
        console.log(error);
    },
    (_t, _success) => {
        successFunc;
    }
  );
};

//Borrar la base de datos
const dropDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table class");
        },
        (_t, error) => {
          console.log("Error al eliminar la tabla de Asignaturas");
          reject(error);
        },
        (_t, result) => {
          resolve(result);
        }
      );
    });
};

//Creacion de la tabla de notas
const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists class (idclass integer primary key autoincrement, name text not null, score text not null,  details text not null);"
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Tabla creada!");
          resolve(success);
        }
      );
    });
  };

export const database = {
    getClass,
    insertClass,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
};
