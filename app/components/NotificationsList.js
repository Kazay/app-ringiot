import * as React from "react"
import { Text, View, FlatList, SectionList, StyleSheet } from "react-native"
import { Spacing } from '../modules/Style'
import Notification from './Notification'

export class NofiticationsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sections : this.props.sections
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.sections !== this.props.sections){
			 this.setState({ sections: nextProps.sections })
		}
	}

	renderSection = ({ item }) => {
		return (
			<FlatList
				data={item.list}
				numColumns={2}
				renderItem={this.renderListItem}
				keyExtractor={this.keyExtractor}
			/>
		)	
	}	

	renderSectionHeader = ({ section }) => {
		return <Text style={styles.listHeader}>{section.title}</Text>
	}

	renderListItem = ({ item }) => {
		console.log(item);
		return (
			<Notification url={item.url} timestamp={item.timestamp}/>
		)
	}

	keyExtractor = (item) => {
		return item.key
	}

	render () {
		return (
			<SectionList
				sections={this.state.sections}
				renderSectionHeader={this.renderSectionHeader}
				renderItem={this.renderSection}
				keyExtractor={this.keyExtractor}
			/>
		)
	}
}

export default NofiticationsList;

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
