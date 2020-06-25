import React from 'react';
import { Image } from 'react-native';
import { Container, Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { useSelector } from "react-redux";
import {fcmService} from '../services/FCMService';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function EventComponent() {
    const eventInfo = useSelector((state) => state.eventInfo);
    const userInfo = useSelector((state) => state.userInfo);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    console.log('eventInfo');
    console.log(eventInfo);

    const suscribeToEvent = () =>{
        console.log('fcmService');
        console.log(fcmService);
        fcmService.subscribeToTopic(eventInfo.id.toString());
    }
    const editEvent = ()=>{
        console.log('edit event');
        navigation.navigate('Edit');
    }
    return (
        <>
            <Container style={{padding: 8}}>
                <Image source={{uri: eventInfo.image}} style={{height: 100, width: null,   flex: 1,}}/>
                <Card transparent style={{flex: 0}}>
                    <CardItem>
                    <Left>
                        <Body>
                        <Text note>Location: {eventInfo.placeName}</Text>
                        </Body>
                    </Left>
                    <Right>
                        {
                        userInfo.email===eventInfo.owner?
                        <Button transparent onPress={() => editEvent()} textStyle={{color: '#87838B'}}>
                        <Icon name="create" />
                        <Text>Edit</Text>
                        </Button>
                        :<Button transparent onPress={() => suscribeToEvent()} textStyle={{color: '#87838B'}}>
                        <Icon name="add-circle" />
                        <Text>Suscribe</Text>
                        </Button>
                        }
                        
                    </Right>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                            {eventInfo.description}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Container>
        </>
    )
}
