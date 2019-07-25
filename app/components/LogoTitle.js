import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

class LogoTitle extends React.Component {
	render() {
	  return (
		<View style={styles.container}>
			<Image
				source={require('../assets/images/logo.png')}
				style={styles.logo}
			/>
		</View>
		
	  );
	}
}

export default LogoTitle;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		width: 40,
		height: 40,
	},
});