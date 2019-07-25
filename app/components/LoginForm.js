import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Config from '../config';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
		
	handleSubmit = () => {
		fetch('ec2-15-188-55-37.eu-west-3.compute.amazonaws.com:3000/login', { 
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				loginName: this.state.email,
				password: this.state.password,
				})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			Alert.alert(responseJson);
		})
		.catch(error=>console.log(error))
	}

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
	padding: 20
	},
	input:{
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		marginBottom: 10,
		padding: 10,
		color: '#000'
	},
	buttonContainer:{
		backgroundColor: '#FFD900',
		paddingVertical: 15
	},
	buttonText:{
		color: '#000',
		textAlign: 'center',
		fontWeight: '700'
	}
});