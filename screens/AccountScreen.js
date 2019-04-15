import React from 'react';
import {
  View,
} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements'


export default class AccountScreen extends React.Component {


  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Avatar
          large
          title="JD"
          rounded
          overlayContainerStyle={{backgroundColor:"#e67e22"}}
        />
        <Text h4>John' Doe</Text>
        <Text h4>john@gmail.com Doe</Text>
        <Button
          title="Sign In"
          style={{width:100}}
          backgroundColor='#3498db'
          onPress={ ()=> this.props.navigation.navigate('Home2')}
          >
        </Button>

      </View>
    );
  }
}
