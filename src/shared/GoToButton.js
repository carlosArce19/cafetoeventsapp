import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoToButton(props) {
  const navigation = useNavigation();

  return (
    <Button
      title={props.title}
      onPress={() => {
        navigation.navigate(props.screenName);
      }}
    />
  );
}