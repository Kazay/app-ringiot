import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import RedirectModal from '../components/RedirectModal';	
import Config from '../config';
import { Fonts, Inputs, Buttons, Texts, Spacing } from '../modules/Style';

class PasswordRetrievalForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			modalVisible: false,
			modalText: '',
			previewUrl: ''
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
		
	handleSubmit = () => {
		if(this.state.email !== '')
		{
			fetch(Config.SERVEUR_URL_PROD+'lostpassword', { 
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				method: 'POST',
				body: JSON.stringify({
					email: this.state.email
					})
			})
			.then((res) => res.json())
			.then((resp) => {
				console.log(resp)
				this.setState({modalVisible : !this.state.modalVisible, modalText : 'if a ringiot account for '+this.state.email+' exists, you will receive an email with your login informations.', previewUrl : resp.previewUrl});
			})
			.catch(error=>console.log(error))
		}
		else
			Alert.alert('email field is empty. try again sailor !');
		
	}

	handleEmailChange = text => {
		this.setState({ email: text });
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.info}>You'll receive an email with your account informations.</Text>
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
					<Text style={styles.buttonText}>send</Text>
				</TouchableOpacity>
				<RedirectModal
					visible={this.state.modalVisible}
					text={this.state.modalText}
					navigation={this.props.navigation}
					previewUrl={this.state.previewUrl}
				/>
			</View>
		);
	}
}

export default PasswordRetrievalForm;

const styles = StyleSheet.create({
	container: {
		padding: Spacing.base
	},
	info: {
		paddingBottom: 20,
		textAlign: 'center',
		fontFamily: Fonts.regular,
	},
	input: {
		...Inputs.primary
	},
	buttonContainer:{
		...Buttons.primary
	},
	buttonText:{
		...Texts.label
	}
});