import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PasswordRetrievalForm from '../components/PasswordRetrievalForm';
import LogoTitle from '../components/LogoTitle';

class PasswordRetrievalScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <LogoTitle size={40} />,
		headerRight: (<View />)
	};

	render() {
		return (
			<KeyboardAvoidingView style={styles.container}>
				<View style={styles.formContainer}>
					<PasswordRetrievalForm navigation={this.props.navigation}/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default PasswordRetrievalScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	formContainer: {
		//alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		//position: 'absolute',
		width: 150,
		height: 150
	},
	title: {
		paddingTop: 14,
		fontSize: 28,
		textAlign: 'center'
	},
	buttonBack: {
		backgroundColor: 'transparent',
		marginBottom: 14
	}
});