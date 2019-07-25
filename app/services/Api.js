import React from 'react';
import Config from '../../config.js';

class Api extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data = []
		};
	};

	login(post) {
		fetch( Config.SERVER_URL+'/login', { 
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				loginName: post.loginName,
				password: post.password,
				})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson.data;
		})
		.catch(error=>console.log(error))
	}
}

export default Api;