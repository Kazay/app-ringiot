import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Home</Text>
			</View>
		);
	}
}

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});