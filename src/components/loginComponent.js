import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
import Auth0 from 'react-native-auth0';
import { useDispatch } from 'react-redux';
import { setAuthInfo, setUserInfo } from '../redux/Actions/actions';
import {getRequest} from '../services/ApiService';
import {connection} from '../common/constants/connection';
import {httpCode} from '../common/constants/httpCodes';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default function loginComponent() {

  const dispatch = useDispatch();
  const auth0 = new Auth0({ domain: 'clarce.auth0.com', clientId: 'qtXsgcR6zsmy9vUUCHghmZ8fg7dQFMNb' });

  const loginWindow = () => {
    console.log('btn login');
        auth0
            .webAuth
            .authorize({ scope: 'openid profile email', audience: `https://clarce.auth0.com/userinfo`})
            .then(credentials => {
                    // Successfully authenticated
                    // Store the accessToken
                    
                    console.log('credentials');
                    console.log(credentials);

                    getRequest(connection.basePerson, credentials.idToken).then(response => {
                      console.log('response login: ');
                      console.log(response);
                      if(response && response.status == httpCode.OK.status) {
                        dispatch(setUserInfo(response.data));
                        dispatch(setAuthInfo({ ...credentials, isLogin: true }));
                      }
                    });
                }

            )
            .catch(error => {
                console.log(error);
                alert('Error: Not logged in user was detected. Try Again.');
            });
    }

    return (
        <View style={styles.container}>
          <Button
            title="Login"
            onPress={() => loginWindow()}
          />
        
        </View>

    )
}
