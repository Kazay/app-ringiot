import config from '../config';
import axios from 'axios';
import querystring from 'querystring';
import Utils from './Utils';

function getPostHeaders() {
	return {
		'content-type': 'application/x-www-form-urlencoded'
	};
}

async function login(username, password) {
	try {
		const params = {
		 	method: 'POST',
			headers: getPostHeaders(),
			data: querystring.stringify({ login: username, pass: password}),
			url: `${config.API_URL}${config.API_ENDPOINTS.user}connect.php`
		};
		const response = await axios(params);
		const data = response.data;
		return data.success ? data.results : Promise.reject(401);
	} catch(e) {
		return Promise.reject(400);
	}
}

async function getUserInfos(userId) {
	try {
		const user = await Utils.getUserFromStorage();
		const token = user.token || '';
		const query = querystring.stringify({ id: userId, token: token });
		const params = {
		 	method: 'GET',
			url: `${config.API_URL}${config.API_ENDPOINTS.user}get.php?${query}`
		};
		const response = await axios(params);
		const result = response.data;
		if(result.success) {
			let users = result.results.datas;
			// The first user of the array is the user we want
			return users.length ? users[0]: Promise.reject();
		} else {
			Promise.reject(401);
		}
	} catch(e) {
		return Promise.reject(400);
	}
}


async function getBoxInfos(boxId) {
	try {
		const user = await Utils.getUserFromStorage();
		const token = user.token || '';
		const query = querystring.stringify({ id: boxId, token: token });
		const params = {
		 	method: 'GET',
			url: `${config.API_URL}${config.API_ENDPOINTS.rasp}get.php?${query}`
		};
		const response = await axios(params);
		const result = response.data;
		if(result.success) {
			let boxs = result.results.datas;
			// The first user of the array is the user we want
			return boxs.length ? boxs[0]: Promise.reject();
		} else {
			Promise.reject(401);
		}
	} catch(e) {
		return Promise.reject(400);
	}
}

async function getNotifications(boxId) {
	try {
		const user = await Utils.getUserFromStorage();
		const token = user.token || '';
		const query = querystring.stringify({ id_rasp: boxId, token: token });
		const params = {
		 	method: 'GET',
			url: `${config.API_URL}${config.API_ENDPOINTS.notification}get.php?${query}`
		};
		const response = await axios(params);
		const result = response.data;
		if(result.success) {
			// The first user of the array is the user we want
			return result.results.datas || [];
		} else {
			Promise.reject(401);
		}
	} catch(e) {
		return Promise.reject(400);
	}
}

export default {
	login: login,
	getUserInfos: getUserInfos,
	getBoxInfos: getBoxInfos,
	getNotifications: getNotifications
}
