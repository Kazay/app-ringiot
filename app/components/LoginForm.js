import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Config from '../config';
import { Texts, Buttons, Spacing, Inputs } from '../modules/Style';

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
		if(this.state.email !== '' && this.state.password !== '')
		{
			fetch(Config.SERVEUR_URL_PROD+'login', { 
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				method: 'POST',
				body: JSON.stringify({
					loginName: this.state.email,
					password: this.state.password,
					})
			})
			.then((res) => res.json())
			.then((res) => {
					this.setState({ data: res })
					if(this.state.data.username !== undefined)
						this._signInAsync();	
					else
						Alert.alert('Shooot, invalid user/password combination, please try again.');
			})
			.catch(error=>console.log(error))
		}
		else
			Alert.alert('empty email or password field. try again sailor !');
	}

	_signInAsync = async () => {
		await AsyncStorage.setItem('userToken', this.state.data.username);
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
				keyboardType='email-address' 
				returnKeyType="next" 
				placeholder='email' 
				placeholderTextColor='#c7c7c8'
				value={this.state.email}
				onChangeText={(text) => this.handleEmailChange(text)}
				/>

				<TextInput style = {styles.input} 
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
		...Buttons.primary,
	},
	buttonText:{
		...Texts.label
	}
});