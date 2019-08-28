import React from 'react';
import { SectionList, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Texts, Spacing } from '../modules/Style';

// Import des components
import HeaderMenu from '../components/HeaderMenu';
import NofiticationsList from '../components/NotificationsList';


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
					{
						title: 'August 2019, Wed. 22', 
						key: '0',
						data: [
							{
								list : [
									{
										key: '0',
										url:'https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-600w-788313199.jpg',
										timestamp:'19:33'
									},
									{
										key: '1',
										url:'https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-600w-788313199.jpg',
										timestamp:'19:23'
									}								
								]
							}
						]
					},
					{
						title: 'July 2019, Mon. 13',
						key: '1',
						data: [
							{
								list: [
									{
										key: '0',
										url:'https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-600w-788313199.jpg',
										timestamp:'23:41'
									}
								]
								
							}
							
						]
					}
				]
			});
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
