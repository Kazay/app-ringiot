import AsyncStorage from '@react-native-community/async-storage';


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

export default {
	getUserFromStorage: getUserFromStorage,
  removeUserFromStorage: removeUserFromStorage,
  renderIf: renderIf
}
