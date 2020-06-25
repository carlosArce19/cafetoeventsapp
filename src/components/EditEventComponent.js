import React from 'react'
import EventFormComponent from '../shared/EventFormComponent';
import { useSelector } from "react-redux";
import {putMultiPartFileEventRequest} from '../services/ApiService';
import {connection} from '../common/constants/connection';

export default function EditEventComponent() {
    const eventInfo = useSelector((state) => state.eventInfo);
    const authInfo = useSelector((state) => state.authInfo);

    const updateEvent =(event)=>{
        console.log('event');
        console.log(event);
        putMultiPartFileEventRequest(connection.baseEvents, event.id, event.image, event.title, event.description, event.placeName, 1.25451, 1.254697, authInfo.idToken)
        .then((response) =>{
            console.log('put  event response');
            console.log(response);
        });
    };

    return (
        <EventFormComponent event={eventInfo} callBack={updateEvent}/>
    )
}
