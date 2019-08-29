import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer, SafeAreaView, DrawerItems } from 'react-navigation';
import { View, TouchableHighlight, ScrollView, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UnlockScreen from './app/views/UnlockScreen';
import NotificationsScreen from './app/views/NotificationsScreen';
import SettingsScreen from './app/views/SettingsScreen';
import AuthLoadingScreen from './app/views/AuthLoadingScreen';
import PasswordRetrievalScreen from './app/views/PasswordRetrievalScreen';
import LoginScreen from './app/views/LoginScreen';
import { Colors, Spacing, Texts } from './app/modules/Style';
import LogoTitle from './app/components/LogoTitle';
import UserLabel from './app/components/UserLabel';

const AppStack = createDrawerNavigator({
	Unlock: UnlockScreen,
	Notifications: NotificationsScreen,
	Settings: SettingsScreen
	},
	{
		contentComponent: (props) => (
			<SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
				<View style={{paddingRight: Spacing.medium, paddingBottom: Spacing.medium, height: 160,alignItems: 'space-between', justifyContent: 'center'}}>
					<LogoTitle size={60} />
					<UserLabel />
				</View>
				<ScrollView>
					<DrawerItems {...props}/>
				</ScrollView>
				<TouchableHighlight
					style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
					onPress={ () => {
						AsyncStorage.clear();
						props.navigation.navigate('Login')
					}}>
					<Text style={{...Texts.link, marginBottom: Spacing.medium}}>Log out</Text>
				</TouchableHighlight>
			</SafeAreaView>
		),
		hideStatusBar: false,
		drawerBackgroundColor: Colors.white,
		overlayColor: '#000',
		contentOptions: {
			activeTintColor: '#000',
			activeBackgroundColor: Colors.primary,
			labelStyle: {
				textAlign : 'right',
				fontFamily: 'RobotoMono-Regular',
				fontWeight: 'normal'
			}
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
