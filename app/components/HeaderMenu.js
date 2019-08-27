import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Texts, Spacing } from '../modules/Style';


class HeaderMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	  return (
			<View style={ styles.header }>
				<Text style={ Texts.header }> {this.props.title} </Text>
				<TouchableOpacity
					style={ styles.menu }
					onPress={ this.props.navigation.openDrawer }>
					<Image
						style={{width: 20, height: 20}}
						source={require('../assets/images/menu_icon.png')}>
					</Image>
				</TouchableOpacity>
			</View>
		);
	}
}

export default HeaderMenu;

const styles = StyleSheet.create({
	header : {
		flex : 1,
		flexDirection : 'row-reverse',
		justifyContent : 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		elevation: 1
	},
	menu : {
		paddingLeft : Spacing.base
	},
});
