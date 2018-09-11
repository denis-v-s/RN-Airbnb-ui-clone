import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Profiles from './screens/Profiles'

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      title: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-search' color={tintColor} size={24} />)
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      title: 'SAVED',
      tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-heart-outline' color={tintColor} size={24} />)
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      title: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (<Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />)
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      title: 'INBOX',
      tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-chatboxes-outline' color={tintColor} size={24} />)
    }
  },
  Profiles: {
    screen: Profiles,
    navigationOptions: {
      title: 'PROFILES',
      tabBarIcon: ({ tintColor }) => (<Ionicons name='ios-person-outline' color={tintColor} size={24} />)
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      elevation: 10,
      // shadowOffset: {width: 5, height: 3},
      // shadowColor: 'black',
      // shadowOpacity: 0.5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
