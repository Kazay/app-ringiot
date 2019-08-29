import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

async function getUserFromStorage() {
	const userStored = await AsyncStorage.getItem('user');
	return JSON.parse(userStored);
}

async function removeUserFromStorage() {
  await AsyncStorage.removeItem('user')
}

function renderIf(condition, content) {
    return condition ? content: null;
}

function formateNotifications(notifs) {
	let order = {};
	let titleDates = [];
	// Ici on formate les arrays avec leurs titres pour tous les récupérés dans un objet
	notifs.forEach(notif => {
		let dayDate = moment(notif.date).hour(1).minute(0).second(0).millisecond(0).valueOf();
		let list = order[dayDate] && order[dayDate].data ? order[dayDate].data[0].list : [];
		order[dayDate] = 	{
			title : moment(dayDate).format('MMMM YYYY, ddd. Do'),
			data: [{
				list : list
			}]
		};
		list.push(notif);
		titleDates.indexOf(dayDate) === -1 && titleDates.push(dayDate);
	});
	let finalArray = titleDates.map(item => { return order[item] });

	for (let i = 0; i < finalArray.length; i++) {
		finalArray[i].key = i;
		let list = finalArray[i].data[0].list
		for(let j = 0; j < list.length; j++) {
			list[j].key = j;
		}
	}
	return finalArray;
}


export default {
	getUserFromStorage: getUserFromStorage,
  removeUserFromStorage: removeUserFromStorage,
  renderIf: renderIf,
  formateNotifications: formateNotifications
}
