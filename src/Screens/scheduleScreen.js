import { Content, Form, Icon } from "native-base";
import React, { useEffect, useState, Component } from "react";
import {StyleSheet, 
    View,
    Text,
    minDate,
    maxDate,
    weekdays,
    months
} from "react-native";
import CalendarPicker from 'react-native-calendar-picker';

const ScheduleScreen=({navigation}) => {
    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={['Lun', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do']}
          months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
          previousTitle="Anterior"
          nextTitle="Siguiente"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            color: '#000000',
          }}
        />
        <View style={styles.notes}>
            <View style={styles.notes_notes}>
            <Text style={styles.notes_text}>Examen III Parcial, clase Matematicas</Text>
        </View>
            <View style={[styles.notes_selected_date]}>
            <Text style={styles.small_text}>8:23 PM</Text>
            <Text style={styles.big_text}>14</Text>
        <View style={styles.inline}>
            <Text style={styles.small_text}> Lunes</Text>
        </View>
        </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
    notes: {
        marginTop: 10,
        padding: 20,
        borderColor: '#F5F5F5',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#FAFAFA'
    },
    notes_notes: {
        flex: 3
    },
    notes_text: {
        fontSize: 18
    },
    notes_selected_date: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    small_text: {
        fontSize: 15
    },
    big_text: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    
});


export default ScheduleScreen;