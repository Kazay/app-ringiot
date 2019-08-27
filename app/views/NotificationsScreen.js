import React from 'react';
import { SectionList, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Texts, Spacing } from '../modules/Style';

// Import des components
import Notification from '../components/Notification';
import HeaderMenu from '../components/HeaderMenu';



class NotificationsScreen extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
			notifications: []
		}
  }

	componentDidMount() {
			this.setState({
				notifications: [
					{title: 'Jeudi 22 Août 2019', data: [{url:'https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-600w-788313199.jpg', timestamp:'19h33'},
																							{url:'https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-600w-788313199.jpg', timestamp:'19h23'}
					]},
					{title: 'Lundi 13 Juillet 2019', data: [{url:'https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-600w-788313199.jpg', timestamp:'23h41'}]}
				]
			});
	}

  render() {
    return (
			<View style={ styles.container }>
				<HeaderMenu navigation={this.props.navigation} title={"Notifications"}></HeaderMenu>
				<View style={styles.content}>
					<SectionList style={styles.listContainer}
						sections={this.state.notifications}
						renderItem={({item}) => <Notification url={item.url} timestamp={item.timestamp}/> }
						renderSectionHeader={({section}) => <Text style={styles.listHeader}>{section.title}</Text>}
						keyExtractor={(item, index) => index} />
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
