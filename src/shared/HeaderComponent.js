import React, { Component } from 'react';
import { Container, Header,  Left, Body, Right,  Title, Button, Icon } from 'native-base';

export default class HeaderComponent extends Component {

  clickEvent = () =>{
    this.props.callBack();
  }  

    render() {
      return (
          <Header>
            <Left/>
            <Body>
              <Title>{this.props.title}</Title>
            </Body>
            <Right>
              {this.props.button?
                <Button  onPress={() => this.clickEvent()} >
                  <Icon name={this.props.icon}/>
                </Button>
                :null}
            </Right>
          </Header>
      );
    }
  }