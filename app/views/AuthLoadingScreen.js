import React from 'react';
import {
	ActivityIndicator,
	StatusBar,
	View,
	StyleSheet
} from 'react-native';

import Utils from '../services/Utils';
import { Spacing } from '../modules/Style';


class AuthLoadingScreen extends React.Component {
constructor(props) {
	super(props);
	this._bootstrapAsync();
}

_bootstrapAsync = async () => {
	const user = await Utils.getUserFromStorage();
	let navTo = 'Auth'; // Route vers laquelle rediriger l'utilisateur
	if (user) {
		if (user.id && user.username && user.token) {
			// Si un token est présent pour l'utilisateur, on le connecte directement sur la page d'accueil
			navTo = 'App';
		} else {
			// Etant donné qu'une des données est manquante, on reset le stockage en AsyncStorage
			await Utils.removeUserFromStorage();
		}
	}
	this.props.navigation.navigate(navTo);
};

render() {
	return (
	<View style={ styles.container }>
		<ActivityIndicator style={ styles.loading } />
		<StatusBar barStyle="default" />
	</View>
	);
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loading: {
		margin: Spacing.large
	}
});

export default AuthLoadingScreen;
