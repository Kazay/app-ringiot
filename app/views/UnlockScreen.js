import React from 'react';
import SocketIOClient from 'socket.io-client';
import { View, Button, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Colors, Texts, Spacing } from '../modules/Style';
//ws://192.168.1.182:5678/newConnection
// websocket aws : ws://15.188.62.173:3000/
// Import des components
import HeaderMenu from '../components/HeaderMenu';

class UnlockScreen extends React.Component {

	constructor(props) {
		super(props)
		
		this.unlock = this.unlock.bind(this);
	}
	
	componentDidMount() {
		this.socket = SocketIOClient('ws://192.168.1.182:5678/newConnection');
		this.socket.on('connect', () => {
			console.log('CONNECTED');
		});
	}

	unlock = () => {
		console.log('UNLOCK')
		this.socket.emit('unlock', { msg : 'UNLOCKED' } );
	}

	render() {
		return(
			<View style={styles.container}>
				<HeaderMenu navigation={this.props.navigation} title={"Unlock"}></HeaderMenu>
				<View style={styles.content}>
					<ImageBackground style={styles.imageBackground} source={{uri: "https://static1.puretrend.com/articles/9/82/93/9/@/946388-sd-580x0-2.jpg"}}>
						<TouchableOpacity
							style={styles.unlockButton}
							onPress={ this.unlock }>
							<Text style={styles.unlockText}>Unlock</Text>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			</View>
		);
	}
}

export default UnlockScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%'
	},
	content: {
		flex: 9,
		width: '100%'
	},
	imageBackground: {
		width:'100%',
		height: '100%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	unlockButton: {
		borderRadius : 50,
		width: 100,
		height: 100,
		marginBottom: 100,
		backgroundColor: Colors.secondary,
		borderWidth: 5,
		borderColor: Colors.primary
	},
	unlockText: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		textTransform: 'uppercase',
		fontFamily: 'RobotoMono-Bold',
	}
});
