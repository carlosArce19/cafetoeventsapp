import React, {useState} from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Icon, Text, Body } from 'native-base';
import HeaderComponent from '../shared/HeaderComponent';
import ImagePicker from 'react-native-image-picker';

export default function EventFormComponent(props) {
    const [event, setEvent] = useState(props.event);

    const titleHandler = (e) => {
        setEvent({...event, title:e});
    }
    const descriptionHandler = (e) => {
        setEvent({...event, description:e});
    }
    const placeNameHandler = (e) => {
        setEvent({...event, placeName:e});
    }
    const handlePhoto = () => {
        console.log('file');
        ImagePicker.launchImageLibrary({}, response => {
            console.log('response image picker');
            console.log(response);
            if(!response.didCancel){
                setEvent({...event, image:response});
            }
        })
    }
    const summit = () =>{

        console.log('summit child');
        console.log(event.title);
        console.log(event.title.trim());
        console.log(event.title.trim().length);
        if(event.title !== null && event.title.trim().length>0 && event.placeName !== null && event.placeName.trim().length>0) {
            
            let eventLocal = {...event};
            eventLocal.image = eventLocal.image.uri?{...eventLocal.image, send: true}:{...eventLocal.image, send: false};
            props.callBack(eventLocal);
        } else {
            alert('Ups: Title and Location fields are mandatory');
        }

    }
    return (
        <>
            <Container>
                <Content>
                <Form>
                    <Item stackedLabel>
                    <Label>Title</Label>
                    <Input 
                        value= {event.title}
                        onChangeText={e => titleHandler(e)}/>
                    </Item>
                    <Item stackedLabel>
                    <Label>Description</Label>
                    <Input 
                        value= {event.description}
                        multiline={true}
                        onChangeText={e => descriptionHandler(e)}/>
                    </Item>
                    <Item stackedLabel>
                    <Label>Location</Label>
                    <Input 
                        value= {event.placeName}
                        multiline={true}
                        onChangeText={e => placeNameHandler(e)}/>
                    </Item>
                    <Item >
                        <Input 
                        value= {event.image?event.image.fileName:null}
                        editable={false}
                        placeholder="Image"
                        />
                        <Button  onPress={() => handlePhoto()} >
                            <Icon name="cloud-upload" />
                        </Button>
                    </Item>
                    <Button  onPress={() => summit()} >
                        <Body>
                            <Text style={{color: '#fff'}}>Summit</Text>
                        </Body>
                        
                    </Button>
                </Form>
                </Content>
            </Container>
        </>
        
    )
}
