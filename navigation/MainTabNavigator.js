import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import FollowingScreen from '../screens/FollowingScreen';

import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

// const AccountStack = createStackNavigator({
//   Home: AccountScreen,
// });
//
// AccountStack.navigationOptions = {
//   tabBarLabel: 'Account',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-settings${focused ? '' : '-outline'}`
//           : 'md-settings'
//       }
//     />
//   ),
// };
//
// const SearchStack = createStackNavigator({
//   Search: SearchScreen,
// });
//
// SearchStack.navigationOptions = {
//   tabBarLabel: 'Search',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search$'}
//     />
//   ),
// };
//
// const FollowingStack = createStackNavigator({
//   Following: FollowingScreen,
// });
//
// FollowingStack.navigationOptions = {
//   tabBarLabel: 'Following',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-contacts'}
//     />
//   ),
// };

var Nav = createBottomTabNavigator({
  AccountStack:AccountScreen,
  SearchStack: SearchScreen,
  FollowingStack: FollowingScreen,
});

export default createStackNavigator({
  Home:HomeScreen,
  SignIn:SignInScreen,
  SignUp:SignUpScreen,
  Nav:Nav
},
{
  headerMode:'none'
}
)
