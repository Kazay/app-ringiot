import React from 'react';
import { SectionList, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Texts, Spacing } from '../modules/Style';

// Import des components/services
import HeaderMenu from '../components/HeaderMenu';
import NofiticationsList from '../components/NotificationsList';
import Api from '../services/Api';
import Utils from '../services/Utils';

class NotificationsScreen extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
			notifications: []
		}

		this._bootstrapAsync();
  }

	async _bootstrapAsync() {
		try {
			const user = await Utils.getUserFromStorage();
			const raspId = user.id_rasp;
			const notifications = await Api.getNotifications(raspId);
			const formatedNotifications = Utils.formateNotifications(notifications);
			this.setState({notifications: formatedNotifications});
		} catch(e) {
			console.log(e);
			this.setState({notifications: []});
		}
	}

	componentDidMount() {

	}

  render() {
    return (
			<View style={ styles.container }>
				<HeaderMenu navigation={this.props.navigation} title={"Notifications"}></HeaderMenu>
				<View style={styles.content}>
					<NofiticationsList sections={this.state.notifications} />
				</View>
			</View>
    );
  }
}

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
		flex: 1,
		width: '100%'
  },
  content: {
		flex: 9,
		width: '100%'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  },
	listHeader: {
		fontFamily: 'RobotoMono-Regular',
		height: 50,
		color: 'black',
		textAlign: 'right',
		fontSize: 16,
		marginRight: Spacing.base,
		marginTop: Spacing.large,
		marginBottom: -10
	}
});
