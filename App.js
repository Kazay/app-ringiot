import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './app/views/HomeScreen';
import NotificationsScreen from './app/views/NotificationsScreen';
import AuthLoadingScreen from './app/views/AuthLoadingScreen';
import LoginScreen from './app/views/LoginScreen';

const AppStack = createStackNavigator({
	Home: HomeScreen,
	Notifications: NotificationsScreen
});

const AuthStack = createStackNavigator({
	Login: LoginScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));