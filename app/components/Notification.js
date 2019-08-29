import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Colors, Fonts } from '../modules/Style';

class Notification extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: props.url,
			timestamp: props.timestamp,
			new: props.new
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.imageBackground} source={{uri: this.state.url}}>
					{ this.state.new !== undefined ? <View style={styles.notificationCircle}></View> : null }
					<Text style={styles.textImage}>{this.state.timestamp}</Text>
				</ImageBackground>
			</View>
		);
	}
}

export default Notification;

const styles = StyleSheet.create({
	container: {
		height:  200,
		width: '50%',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'wrap'

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
		fontFamily: Fonts.bold,
	},
	notificationCircle: {
		position: 'absolute',
		left: 20,
		top: 20,
		width:10,
		height: 10,
		borderRadius: 100,
		backgroundColor: Colors.alert

	}
});
