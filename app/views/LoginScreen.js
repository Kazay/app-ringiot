import React from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../components/LoginForm';	
import LogoTitle from '../components/LogoTitle';	


class LoginScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image resizeMode="contain" style={styles.logo} source={require('../assets/images/logo.png')} />
				</View>
				<View style={styles.titleContainer}>
					
				</View>
				<View style={styles.formContainer}>
					<LoginForm />
				</View>
				<Text style={styles.forgetText} onPress={() => this.props.navigation.navigate('PasswordRetrieval')}>
					forgot your password ?
				</Text>
			</KeyboardAvoidingView>
		);
	}
}

export default LoginScreen;

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
	forgetText: {
		fontWeight: 'bold',
		textAlign: 'center',
		textDecorationLine: 'underline',
		paddingBottom: 20
	}
});