import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class NotificationsScreen extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Notifications</Text>
				<TouchableOpacity onPress={this.props.navigation.openDrawer}>
					<Text>Open Drawer</Text>
				</TouchableOpacity>
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