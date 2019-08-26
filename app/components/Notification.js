import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Config from '../config';

class Notification extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: props.url,
			timestamp: props.timestamp
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.imageBackground} source={{uri: this.state.url}}>
					<View style={styles.notificationCircle}></View>
					<Text style={styles.textImage}>{this.state.timestamp}</Text>
				</ImageBackground>
			</View>
		);
	}
}

export default Notification;

const styles = StyleSheet.create({
	container: {
		width:'100%',
		height:  200
	},
	imageBackground: {
		width: '100%',
		height: '100%',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	textImage: {
		marginRight: 20,
		marginBottom: 20,
		padding: 10,
		borderWidth: 2,
		borderColor: '#FFD900',
		backgroundColor: '#FFD900',
		fontSize: 16,
		fontWeight: 'bold'
	},
	notificationCircle: {
		position: 'absolute',
		left: 20,
		top: 20,
		width:20,
		height: 20,
		borderRadius: 100,
		backgroundColor: '#FFD900'

	}
});
