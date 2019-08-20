import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import UnlockScreen from './app/views/UnlockScreen';
import NotificationsScreen from './app/views/NotificationsScreen';
import AuthLoadingScreen from './app/views/AuthLoadingScreen';
import PasswordRetrievalScreen from './app/views/PasswordRetrievalScreen';
import LoginScreen from './app/views/LoginScreen';

const AppStack = createDrawerNavigator({
	Unlock: UnlockScreen,
	Notifications: NotificationsScreen
	},
	{
		hideStatusBar: true,
		drawerBackgroundColor: 'rgba(255,255,255,.9)',
		overlayColor: '#6b52ae',
		contentOptions: {
			activeTintColor: '#fff',
			activeBackgroundColor: '#6b52ae',
		},
	}
);

const AuthStack = createStackNavigator({
	Login: LoginScreen,
	PasswordRetrieval: PasswordRetrievalScreen
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