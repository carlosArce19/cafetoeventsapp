import React, {useState, useRef} from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Icon, Text, Body } from 'native-base';
import HeaderComponent from '../shared/HeaderComponent';
import ImagePicker from 'react-native-image-picker';
import { useSelector } from "react-redux";
import {postMultiPartFileEventRequest} from '../services/ApiService';
import {connection} from '../common/constants/connection';
import EventFormComponent from '../shared/EventFormComponent';

export default function CreateEventComponent() {
    const [event, setEvent] = useState({title: '', description: '', placeName:'', image: {fileName:''} });
    const authInfo = useSelector((state) => state.authInfo);

    const summit = (eventFill) =>{
        console.log('summit');
        console.log({...eventFill});
        setEvent({...eventFill});
        postMultiPartFileEventRequest(connection.baseEvents, eventFill.image, eventFill.title, eventFill.description, eventFill.placeName, 1.25451, 1.254697, authInfo.idToken)
        .then((response) =>{
            console.log('post  event response');
            console.log(response);
        });
    }

    return (
        <>
            <HeaderComponent title="Create Event" button={false}/>
            <EventFormComponent event={event} callBack={summit} />
        </>
        
    )
}
