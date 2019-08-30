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
	notifs.forEach(notif => {
		let dayDate = moment(notif.date).hour(1).minute(0).second(0).millisecond(0).valueOf();
		let list = order[dayDate] && order[dayDate].data ? order[dayDate].data[0].list : [];
		order[dayDate] = 	{
			title : moment(dayDate).format('MMMM YYYY, ddd. Do'),
			data: [{
				list : list
			}]
		};
<<<<<<< HEAD
		// Fix pour avoir 1 notif par minute
		if(addedSeconds.indexOf(daySecond) === -1) {
			list.push(notif);
			addedSeconds.push(daySecond);
		}
=======
		list.push(notif);
>>>>>>> b386ccd58b9ec135b1e48bf11e62176dff945eb6
		titleDates.indexOf(dayDate) === -1 && titleDates.push(dayDate);
	});
	let finalArray = titleDates.map(item => { return order[item] });
	// Pour afficher les notifs dans le bon ordre de jour 
	finalArray = finalArray.reverse();

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
