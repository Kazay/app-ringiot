
const prod = true; // passer à false pour le dev

// Change l'url de l'api en fonction de l'environnement de prod ou de dev
const API_URL = prod ? 'https://tchenioguillaume.fr/iot/' : 'https://tchenioguillaume.fr/iot/';

const API_ENDPOINTS = {
	user: 'user/',
	rasp: 'rasp/' 
}

export default {
	API_URL,
	API_ENDPOINTS
};
