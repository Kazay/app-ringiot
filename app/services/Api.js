import config from '../config';
import axios from 'axios';
import querystring from 'querystring';

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
		const logTry = await axios(params);
		const data = logTry.data;
		console.log(data);
		return data.success ? data.results : Promise.reject(401);
	} catch(e) {
		return Promise.reject(400);
	}
}


export default {
	login: login,
	// notifications: notifications
}
