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

	linkBox = () => {
		console.log('box linking');
	}

	render() {
		const boxIsNotConnected = <Text style={Texts.label}>your ringiot box is not paired with a network </Text>;
		const boxIsConnected = <Text style={Texts.label}>current ip address : {this.state.box.ip}</Text>;
	  return (
		<View style={styles.container}>
			<Text style={Texts.title}>{this.state.user.login}</Text>
			<Text style={Texts.label}>{this.state.user.email}</Text>
			<View style={styles.boxContainer}>
				<Text style={Texts.label}>box id: {this.state.user.id_rasp}</Text>
				{ this.state.box.ip ? boxIsConnected : boxIsNotConnected }
			</View>
			<View style={styles.boxInfos}>
				<TouchableOpacity style={styles.pairButton}
					onPress={this.linkBox}>
					<Text style={styles.pairLabel}>pair .ringiot box</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.infoLabel}>make sure both your device and your box are connected to the same wifi network before pairing.</Text>
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
	boxInfos: {
		marginTop: Spacing.larger,
		width: '100%',
		textAlign: 'left',
		marginLeft: Spacing.base
	},
	boxContainer: {
		padding: Spacing.base
	},
	infoContainer: {
		padding: Spacing.base
	},
	infoLabel: {
		...Texts.labelSmall
	},
	pairButton: {
		...Buttons.primary
	},
	pairLabel: {
		...Texts.label,
		paddingHorizontal: Spacing.base
	}
});
