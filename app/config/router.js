import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import BuySellScreen from '../screens/BuySellScreen';
import BittrexScreen from '../screens/BittrexScreen';
import BinanceScreen from '../screens/BittrexScreen';
import BitfinexScreen from '../screens/BittrexScreen';
import BitstampScreen from '../screens/BittrexScreen';
import KrakenScreen from '../screens/BittrexScreen';


export const Home = StackNavigator({
  Home: {
    screen: HomeScreen,
  }, 


  LoginScreen: {  
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login for $navigation.state.params.excName',
    }), 
  },

  BittrexScreen: {  
    screen: BittrexScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login for $navigation.state.params.excName',
    }), 
  },

  BinanceScreen: {  
    screen: BittrexScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login for $navigation.state.params.excName',
    }), 
  },

  BitstampScreen: {  
    screen: BittrexScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login for $navigation.state.params.excName',
    }), 
  },

  BitfinexScreen: {  
    screen: BittrexScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login for $navigation.state.params.excName',
    }), 
  },

  KrakenScreen: {  
    screen: BittrexScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login for $navigation.state.params.excName',
    }), 
  },

  BuySellScreen: {  
    screen: BuySellScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Login for $navigation.state.params.excName',
    }), 
  },

}, 
{
  mode: 'modal',
  headerMode: 'none',
});