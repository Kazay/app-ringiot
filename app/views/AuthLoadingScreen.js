import React from 'react';
import {
	ActivityIndicator,
	StatusBar,
	View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends React.Component {
constructor(props) {
	super(props);
	this._bootstrapAsync();
}

_bootstrapAsync = async () => {
	const userStored = await AsyncStorage.getItem('user'); // Recherche d'un token utilisateur présent en async storage
	const userParsed = JSON.parse(userStored);
	let navTo = 'Auth'; // Route vers laquelle rediriger l'utilisateur
	if (userStored) {
		if (userParsed.id && userParsed.username && userParsed.token) {
			// Si un token est présent pour l'utilisateur, on le connecte directement sur la page d'accueil
			navTo = 'App';
		} else {
			// Etant donné qu'une des données est manquante, on reset le stockage en AsyncStorage
			await AsyncStorage.removeItem('user')
		}
	}
	this.props.navigation.navigate(navTo);
};

render() {
	return (
	<View>
		<ActivityIndicator />
		<StatusBar barStyle="default" />
	</View>
	);
}
}

export default AuthLoadingScreen;
