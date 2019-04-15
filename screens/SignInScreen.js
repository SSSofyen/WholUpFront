import React from 'react';
import { View } from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';

export default class SignInScreen extends React.Component {

  constructor(){
  super()
  this.state = {password : '',
                email : '',
                eMessage:false,
              }
}

handleSubmit= () =>{
  fetch('http://10.2.1.203:3000/signin?email='+this.state.email+'&password='+this.state.password)
  .then((resp)=> resp.json())
  .then((user)=> {
    if (user.isUserExist) {
      this.props.navigation.navigate('AccountStack')
    }else{
      this.setState({
        eMessage:true
      })
    }

  })
}


 render() {
   return (
     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

       <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(text) => this.setState({email:text})}/>

        <FormLabel>Password</FormLabel>
         <FormInput onChangeText={(text) => this.setState({password:text})}/>

        {this.state.eMessage
            ?<FormValidationMessage>Une erreur d'identification à eu lieu</FormValidationMessage>
            :<View></View>
          }


         <Button
           style={{width:100, marginTop:20}}
           title ="Sign In"
           backgroundColor="#3498db"
           onPress={this.handleSubmit}
         />


     </View>
   )
 }
}
