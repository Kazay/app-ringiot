import React from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class UnlockScreen extends React.Component {

	handleLogout = async () => {
		await AsyncStorage.removeItem('userToken');
		this.props.navigation.navigate('Auth');
	}

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Home</Text>
				<Button title='Logout' onPress={() => this.handleLogout()} />
				<TouchableOpacity onPress={this.props.navigation.openDrawer}>
					<Text>Open Drawer</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default UnlockScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});