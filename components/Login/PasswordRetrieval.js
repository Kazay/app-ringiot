import React from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PasswordRetrievalForm from './PasswordRetrievalForm';

class Login extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo.png')} />
					<Text style={styles.title}>.ringiot</Text>
				</View>
				<View style={styles.titleContainer}>
					
				</View>
				<View style={styles.formContainer}>
					<PasswordRetrievalForm />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

import PasswordRetrieval from './PasswordRetrieval';

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	logo: {
		//position: 'absolute',
		width: 200,
		height: 200
	},
	title: {
		paddingTop: 14,
		fontSize: 28,
		textAlign: 'center'
	},
});