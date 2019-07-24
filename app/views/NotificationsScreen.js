import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NotificationsScreen extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Notifications</Text>
			</View>
		);
	}
}

export default NotificationsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});