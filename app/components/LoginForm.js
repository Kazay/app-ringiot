import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Config from '../config';
import { Texts, Buttons, Spacing, Inputs } from '../modules/Style';
import Api from '../services/Api';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			data: []
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = () => {
		if(this.state.email && this.state.password) {
			Api.login(this.state.email, this.state.password)
			.then(results => {
				this.setState({ data: results });
				this.signInAsync();
			})
			.catch(err => {
				if (err === 401) {
					Alert.alert('Invalid credentials, please try again.');
				} else if (err === 400) {
					Alert.alert('Internal error, please try again later.');
				}
			});
		} else {
			Alert.alert('Empty email or password field, please try again.')
		}
	}

	signInAsync = async () => {
		await AsyncStorage.setItem('user', JSON.stringify({
			id: this.state.data.id,
			username: this.state.data.login,
			token: this.state.data.token,
			id_rasp: this.state.data.id_rasp
		}));
		this.props.navigation.navigate('App');
	};

	handleEmailChange = text => {
		this.setState({ email: text });
	}

	handlePasswordChange = text => {
		this.setState({ password: text });
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput style = {styles.input}
				autoCapitalize="none"
				onSubmitEditing={() => this.passwordInput.focus()}
				autoCorrect={false}
				keyboardType='text'
				returnKeyType="next"
				placeholder='username'
				placeholderTextColor='#c7c7c8'
				value={this.state.email}
				onChangeText={(text) => this.handleEmailChange(text)}
				/>

				<TextInput style = {styles.input}
				autoCapitalize="none"
				returnKeyType="go"
				ref={(input)=> this.passwordInput = input}
				placeholder='password'
				placeholderTextColor='#c7c7c8'
				value={this.state.password}
				onChangeText={(text) => this.handlePasswordChange(text)}
				secureTextEntry
				/>

				<TouchableOpacity style={styles.buttonContainer}
						onPress={this.handleSubmit}>
					<Text  style={styles.buttonText}>login</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default LoginForm;

const styles = StyleSheet.create({
	container: {
		padding: Spacing.base
	},
	input:{
		...Inputs.primary
	},
	buttonContainer:{
		...Buttons.primary
	},
	buttonText:{
		...Texts.label
	}
});
