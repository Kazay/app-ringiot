import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Spacing } from '../modules/Style';

class UserLabel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name : ''
		}
	}

	componentDidMount(){
		const value = AsyncStorage.getItem('userToken')
		value.then((e) => {
			this.setState({name: e})
		})
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
		textAlign : 'right',
		fontWeight : '700'
	}
});