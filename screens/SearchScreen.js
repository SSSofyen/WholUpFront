import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements'
import {connect} from "react-redux"

class SearchScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>

        <List>

          <ListItem
            onPress={   this.props.handleContact   }
            avatar={
            <Avatar
              small
              rounded
              title={contactName}
              overlayContainerStyle={{backgroundColor: '#e67e22'}}/>}
            title= {contactfirstName}
            key="0"
            subtitle={
              <View style={styles.subtitle}>
                <Text style={styles.ratingText}>{contactEmail}</Text>
                <Text style={styles.ratingText}>{contactCompany}</Text>
              </View>
            }
            >
          </ListItem>
          <ListItem
             onPress={   this.props.handleContact   }
             key="1"
             avatar={
               <Avatar
                 small
                 rounded
                 title={contactName}
                 overlayContainerStyle={{backgroundColor: '#3498db'}}
               />
             }
             title={contactfirstName}
             subtitle={
               <View style={styles.subtitle}>
                 <Text style={styles.ratingText}>{contactEmail}</Text>
                 <Text style={styles.ratingText}>{contactCompany}</Text>
               </View>
             }
           />

           <ListItem
            onPress={   this.props.handleContact   }
             key="2"
             avatar={
               <Avatar
                 small
                 rounded
                 title={contactName}
                 overlayContainerStyle={{backgroundColor: '#16a085'}}
               />
             }
             title={contactfirstName}
             subtitle={
               <View style={styles.subtitle}>
                 <Text style={styles.ratingText}>{contactEmail}</Text>
                 <Text style={styles.ratingText}>{contactCompany}</Text>
               </View>
             }
           />

        </List>

      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleContact: function(nameContact, firstNameContact, emailContact, companyNameContact) {
        dispatch( {type: 'addcontact', nameContact: contactName, firstNameContact: contactfirstName, emailContact: contactEmail, companyNameContact: contactCompany} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(SearchScreen);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  subtitle:{
    flexDirection:'row',
    padding:10,
    paddingTop:5,
  },
  ratingText:{
    color: 'grey',
  }
});
