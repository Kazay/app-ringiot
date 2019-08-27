import React from 'react';
import { SectionList, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Texts, Spacing } from '../modules/Style';

import Notification from '../components/Notification';


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
				<View style={ styles.header }>
					<Text style={ Texts.header }> Notifications </Text>
					<TouchableOpacity
						style={ styles.menu }
						onPress={ this.props.navigation.openDrawer }>
						<Image
							style={{width: 20, height: 20}}
							source={require('../assets/images/menu_icon.png')}
						>
						</Image>
					</TouchableOpacity>
				</View>
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
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  },
	listContainer: {
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
	},
});
