import React from "react";
import * as SQLite from 'expo-sqlite';

//Crea y abre la base de datos
const db = SQLite.openDatabase("universityDaybook.db");

//-----------------------------------------------Tabla Asignaturas----------------------------------------------

//Obtiene las clases del usuario
const getAsignatura = (setAsignaturaFunc) => {
    db.transaction((tx) => {
        tx.executeSql(
            "select * from asignatura",
            [],
            (_, {rows: {_array } }) => {
                setAsignaturaFunc(_array);
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
const insertAsignatura = (name, score, details, successFunc) => {
    db.transaction((tx) => {
        tx.executeSql("insert into asignatura (name, score, details) values (?,?,?)", [
            name,
            score,
            details,
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
          tx.executeSql("drop table asignatura");
        },
        (_t, error) => {
          console.log("Error al eliminar la tabla de Asignaturas");
          reject(error);
        },
        (_t, result) => {
          console.log("Se elimino con exito");
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
            "create table if not exists asignatura (idClass integer primary key autoincrement, name text not null, score text not null,  details text not null);"
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

  const setupNotesAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("insert into asignatura (name, score, details) values (?,?,?)", [
            "Matematicas",
            "98",
            "new",
          ]);
        },
        (_t, error) => {
          console.log("Error al momento de insertar los valores por defecto");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Agregados correctamente");
          resolve(success);
        }
      );
    });
  };




  //----------------------------------Tabla Tareas----------------------------------------------
  const getHomework = (setHomeworkFunc) => {
    db.transaction((tx) => {
        tx.executeSql(
            "select * from tarea",
            [],
            (_, {rows: {_array } }) => {
                setHomeworkFunc(_array);
            },
            (_t, error) => {
                console.log("Error al momento de obtener las tareas");
                console.log(error);
            },
            (_t, _success) => {
                console.log("Tareas Obtenidas");
            }
        );
    });
};

//Insertar Tareas
const insertHomework = (name, clas, details, date, successFunc) => {
    db.transaction((tx) => {
        tx.executeSql("insert into tarea (name, clas, details, date) values (?,?,?,?)", [
            name,
            clas,
            details,
            date,
        ]);
    },
    (_t, error) => {
        console.log("Error al insertar Tareas");
        console.log(error);
    },
    (_t, _success) => {
        successFunc;
    }
  );
};

//Borrar la base de datos
const dropDatabaseTableAsyncTarea = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table tarea");
        },
        (_t, error) => {
          console.log("Error al eliminar la tabla de tarea");
          reject(error);
        },
        (_t, result) => {
          console.log("Se elimino tarea con exito");
          resolve(result);
        }
      );
    });
};

//Creacion de la tabla de notas
const setupDatabaseTableAsyncTarea = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists tarea (idtarea integer primary key autoincrement, name text not null, clas text not null,  details text not null, date text not null);"
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla tarea");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Tabla tarea creada!");
          resolve(success);
        }
      );
    });
  };

  const setupNotesAsyncTarea = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("insert into tarea (name, clas, details, date) values (?,?,?,?)", [
            "Guia 3",
            "Matematicas",
            "Resolver los ejercicios del 8 al 15",
            "28/12/2020",
          ]);
        },
        (_t, error) => {
          console.log("Error al momento de insertar los valores por defecto de tarea");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Agregados correctamente tarea");
          resolve(success);
        }
      );
    });
  };

export const database = {
    getHomework: getAsignatura,
    insertAsignatura,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
    setupNotesAsync,
    getHomework,
    insertHomework,
    dropDatabaseTableAsyncTarea,
    setupDatabaseTableAsyncTarea,
    setupNotesAsyncTarea,
};
