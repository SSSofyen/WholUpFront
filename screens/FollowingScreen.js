import React from 'react';
import {View, ScrollView, StyleSheet } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements'
import SearchScreen from "./SearchScreen"


export default class SettingsScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>

        <List>

          <ListItem
            avatar={
            <Avatar
              small
              rounded
              title="EC"
              overlayContainerStyle={{backgroundColor: '#e67e22'}}/>}
            title="Emilie Carpenter"
            key="0"
            subtitle={
              <View style={styles.subtitle}>
                <Text style={styles.ratingText}>contact@gmail.com</Text>
                <Text style={styles.ratingText}>company: Deckow-Crist</Text>
              </View>
            }
          />


        </List>

      </ScrollView>
    );
  }
}

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
