import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

class LogoTitle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size : props.size
		}
	}
	render() {
	  return (
		<View style={styles.container}>
			<Image
				source={require('../assets/images/logo.png')}
				style={{height: this.state.size, width: this.state.size}}
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
	}
});