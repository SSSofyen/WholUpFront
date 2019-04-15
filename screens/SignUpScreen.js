import React from 'react';
import { View } from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';

export default class SignUpScreen extends React.Component {


   constructor(){
    super();
    this.state = {first_name : '',
                  last_name : '',
                  password : '',
                  email : '',
                }
  }

   handleClick = () => {
     fetch('http://10.2.1.203:3000/signup',{
       method:"POST",
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: "first_name="+ this.state.first_name+"&last_name="+this.state.last_name+"&email= "+this.state.email+"&password="+this.state.email
     }
   ).then((response) => {
      return response.json();
    }).then((user) => {
      console.log(user);
      this.props.navigation.navigate('AccountStack')
    })
   }

    render() {

   return (
     <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

       <FormLabel>First Name</FormLabel>
       <FormInput onChangeText={(text)=>this.setState({first_name:text})}/>
       <FormLabel>Last Name</FormLabel>
       <FormInput onChangeText={(text)=>this.setState({last_name:text})}/>
       <FormLabel>Email</FormLabel>
       <FormInput onChangeText={(text)=>this.setState({email:text})}/>
       <FormLabel>Password</FormLabel>
       <FormInput onChangeText={(text)=>this.setState({password:text})}/>

       <Button
         style={{width:100, marginTop:20}}
         title="Sign Up"
         backgroundColor="#3498db"
          onPress={this.handleClick}
       />

     </View>
   )
 }
}
