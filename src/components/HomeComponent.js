import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import CardComponent from '../shared/CardComponent';
import HeaderComponent from '../shared/HeaderComponent';
import { FlatGrid } from 'react-native-super-grid';
import {getRequest} from '../services/ApiService';
import {connection} from '../common/constants/connection';
import {httpCode} from '../common/constants/httpCodes';

const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });

  

export default function HomeComponent() {
      const [events, setEvents] = useState([]);

      const getEvents = () => {
        getRequest(connection.getEvents).then(response => {
          if(response && response.status == httpCode.OK.status) {
            console.log('response');
            console.log(response);
            setEvents(response.data);
          } else {
            alert('Ups something went wrong!!');
          }
        });
      }

      useEffect(() => {
        console.log('init ');
        getEvents();
      }, []);
    
      return (
            <>
                <HeaderComponent title="Home Events" button={true} icon="sync" callBack={getEvents}/>
                <FlatGrid
                    itemDimension={130}
                    data={events}
                    style={styles.gridView}
                    // staticDimension={300}
                    // fixed
                    spacing={10}
                    renderItem={({ item }) => (
                        <CardComponent event={item} prueba={true}></CardComponent>
                    )}
                />
            </>
      );
}
