import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, Alert, Linking, StyleSheet} from 'react-native';

class RedirectModal extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			visible: props.visible,
			text: props.text,
			previewUrl: props.previewUrl
		};
	}

	componentDidUpdate(prevProps) {
		if(prevProps.visible !== this.props.visible)
			this.setState({ visible: this.props.visible });
		if(prevProps.text !== this.props.text)
			this.setState({ text: this.props.text });
		if(prevProps.previewUrl !== this.props.previewUrl)
			this.setState({ previewUrl: this.props.previewUrl });
	}

	setModalVisible(visible) {
		this.setState({visible: visible});
	}
	
	render() {
		return (
		<View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={this.state.visible}
				onRequestClose={() => {
					this.props.navigation.navigate('Login');
			}}>
				<View style={styles.container}>
					<View style={styles.overlay}>
						<Text style={styles.textModal}>{this.state.text}</Text>
						{
							this.state.previewUrl !== undefined ? 
							<Text style={{color: 'blue', paddingBottom: 15}}
								onPress={() => Linking.openURL(this.state.previewUrl)}>
									Preview URL (dev)
							</Text> : null
						}
						<TouchableOpacity 
							style={styles.buttonContainer} 
							onPress={() => {
								this.setModalVisible(!this.state.visible);
								this.props.navigation.navigate('Login');
							}}>
							<Text  style={styles.buttonText}>log in</Text>
						</TouchableOpacity> 
					</View>
				</View>
			</Modal>
		</View>
		);
	  }
}

export default RedirectModal;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		flex : 1,
		alignItems : 'center',
		justifyContent : 'center'
	},
	overlay : {
		margin: 20,
		padding: 20,
		backgroundColor: '#FFF',
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
	},
	textModal:{
		paddingBottom: 15,
		textAlign: 'center'
	}
});

