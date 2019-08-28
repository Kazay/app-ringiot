import React from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Colors, Texts, Spacing } from '../modules/Style';

// Import des components
import HeaderMenu from '../components/HeaderMenu';

class UnlockScreen extends React.Component {

	constructor(props) {
	    super(props)
  }

	unlock = () => {
		// Send socket.io event to unlock the door
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
							<Text>Unlock</Text>
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
		marginBottom: 100,
		backgroundColor: Colors.primary
	}
});
