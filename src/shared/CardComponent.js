import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem,Text, Button, Icon, Left, Body} from 'native-base';
import { useDispatch } from 'react-redux';
import { setEventInfo } from '../redux/Actions/actions';
import { useNavigation } from '@react-navigation/native';

export default function CardComponent(props) {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goToDetails = () => {
    console.log("go to details");
    dispatch(setEventInfo( props.event ));
    navigation.navigate('Event');
  }

    return (
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{props.event.title}</Text>
                  <Text note>{props.event.placeName}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: props.event.image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress={() => goToDetails()} >
                  <Icon name="information-circle-outline" />
                  <Text>Info</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
    );
  }