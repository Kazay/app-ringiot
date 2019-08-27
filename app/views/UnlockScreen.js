import React from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// Import des components
import HeaderMenu from '../components/HeaderMenu';

class UnlockScreen extends React.Component {

	handleLogout = async () => {
		await AsyncStorage.removeItem('userToken');
		this.props.navigation.navigate('Auth');
	}

	render() {
		return(
			<View style={styles.container}>
				<HeaderMenu navigation={this.props.navigation} title={"Unlock"}></HeaderMenu>
				<View style={styles.content}>
				
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
	}
});
