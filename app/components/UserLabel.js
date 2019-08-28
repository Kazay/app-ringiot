import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Spacing } from '../modules/Style';

import Utils from '../services/Utils'

class UserLabel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name : ''
		}

		this._bootstrapAsync();
	}

	async _bootstrapAsync() {
		const user = await Utils.getUserFromStorage() || {};
		this.setState({name: user.username})
	}

	render() {
	  return (
		<View style={styles.container}>
			<Text style={styles.label}>hello, { this.state.name }</Text>
		</View>

	  );
	}
}

export default UserLabel;

const styles = StyleSheet.create({
	container: {
		marginTop: Spacing.base
	},
	label : {
		fontFamily: 'RobotoMono-Bold',
		textAlign : 'right',
		fontSize: 20
	}
});
