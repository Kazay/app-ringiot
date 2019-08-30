import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Colors } from '../modules/Style';

// websocket aws : ws://15.188.62.173:3000/
// websocket rapsberry : ws://81.185.165.6:5678/newConnection/

// Import des components
import HeaderMenu from '../components/HeaderMenu';

class UnlockScreen extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			url: 'http://getwallpapers.com/wallpaper/full/0/7/7/759834-security-wallpapers-2880x1800-mac.jpg'
		}
 		
		this.unlock = this.unlock.bind(this);
	}
	
	componentDidMount() {
		// Connexion aux sockets
		this.socket = new WebSocket('ws://172.20.10.2:5678');
		this.socket.onopen = () => {
			console.log('CONNECTED'); //accessGranted
		};
	}

	componentDidUpdate(prevProps) {
		// Pour changer l'url de l'écran de lock
		if(prevProps.navigation.getParam('url') !== this.props.navigation.getParam('url')) {
			this.setState({url: this.props.navigation.getParam('url', 'http://getwallpapers.com/wallpaper/full/0/7/7/759834-security-wallpapers-2880x1800-mac.jpg')})
		}
	}

	unlock = () => {
		console.log('UNLOCK');
		this.socket.send('unlock');
	}

	render() {
		return(
			<View style={styles.container}>
				<HeaderMenu navigation={this.props.navigation} title={"Unlock"}></HeaderMenu>
				<View style={styles.content}>
					<ImageBackground style={styles.imageBackground} source={{uri: this.state.url}}>
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
