import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

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
		Alert.alert('Email: '+ this.state.email);
	}

	handleEmailChange = text => {
		this.setState({ email: text });
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

				<TouchableOpacity style={styles.buttonContainer} 
						onPress={this.handleSubmit}>
					<Text  style={styles.buttonText}>send</Text>
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