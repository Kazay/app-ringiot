import React from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Colors, Texts, Spacing } from '../modules/Style';

// Import des components/services
import HeaderMenu from '../components/HeaderMenu';
import ParamsInfos from '../components/ParamsInfos';
import Api from '../services/Api';
import Utils from '../services/Utils';

class SettingsScreen extends React.Component {

	constructor(props) {
	    super(props);

			this.state = {
					user: {},
					box: {},
					isLoaded: false
			};
			this._bootstrapAsync();
  }

	renderConditionaly

	async _bootstrapAsync() {
		try {
			const userStored = await Utils.getUserFromStorage();
			const userInfos = await Api.getUserInfos(userStored.id);
			const boxInfos = await Api.getBoxInfos(userInfos.id_rasp);
			this.setState({box: boxInfos, user: userInfos, isLoaded:true});
		} catch (e) {
		}
	}

	linkBox = () => {
		// Link box to it
	}

	render() {
		return(
			<View style={styles.container}>
				<HeaderMenu navigation={this.props.navigation} title={"Settings"}></HeaderMenu>
				<View style={styles.content}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../assets/images/person-icon.png')}
							style={{height: 150, width: 150}}
						/>
						{Utils.renderIf(!this.state.isLoaded, <ActivityIndicator style={{marginTop: Spacing.larger}} /> )}
						{Utils.renderIf(this.state.isLoaded, <ParamsInfos box={this.state.box} user={this.state.user}></ParamsInfos> )}
					</View>
				</View>
			</View>
		);
	}
}

// <Text style={Texts.title}>{this.state.user.login}</Text>
// <Text style={Texts.marginTopText}>{this.state.user.email}</Text>
// <Text style={Texts.marginTopText}>Box: {this.state.user.id_rasp}</Text>
// { this.state.box.ip ? boxIsConnected : boxIsNotConnected}
// <View style={styles.boxInfos}>
// 		<TouchableOpacity style={styles.buttonContainer}
// 			onPress={this.linkBox}>
// 			<Text style={styles.buttonText}>Pair your ringiot box on this network</Text>
// 		</TouchableOpacity>
// </View>
// <ActivityIndicator />


export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%'
	},
	content: {
		flex: 9,
		width: '100%'
	},
	imageContainer: {
		marginTop: Spacing.large,
		flex: 1,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'column'
	}
});
