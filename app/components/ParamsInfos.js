import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Texts, Spacing, Buttons } from '../modules/Style';


class ParamsInfos extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			box: props.box,
			user: props.user
		}
	}
	render() {
		const boxIsNotConnected = <Text style={Texts.marginTopText}> Your ringiot box is not paired with a network </Text>;
		const boxIsConnected = <Text style={Texts.marginTopText}>Your ringiot box is connected to the ip adress : {this.state.box.ip}</Text>;
	  return (
		<View style={styles.container}>
			<Text style={Texts.title}>{this.state.user.login}</Text>
			<Text style={Texts.marginTopText}>{this.state.user.email}</Text>
			<Text style={Texts.marginTopText}>Box: {this.state.user.id_rasp}</Text>
			{ this.state.box.ip ? boxIsConnected : boxIsNotConnected}
			<View style={styles.boxInfos}>
					<TouchableOpacity style={Buttons.primary}
						onPress={this.linkBox}>
						<Text style={Texts.label}>Pair your ringiot box on this network</Text>
					</TouchableOpacity>
			</View>
		</View>

	  );
	}
}

export default ParamsInfos;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	marginTopText: {
		marginTop: Spacing.large,
	},
	boxInfos: {
		width: '100%',
		textAlign: 'left',
		marginLeft: Spacing.base
	}
});
