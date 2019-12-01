const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();

    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    // fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
    // .then(res => console.log(1111, res.json()))
    // .then(json => console.log(2222, { data: json }));

    const url = BASE_URL + endpoint;
    console.log("URL: %O", url);
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const api = {
    badges: {
        list() {
            //throw new Error("500: Error del servidor");
            return callApi('/badges');
        },
        create(badge) {
            console.log("##=> Badge- create: %o", badge);
            //throw new Error("400: Error en entrada de datos al guardar");
            return callApi(`/badges`, {
                method: 'POST',
                body: JSON.stringify(badge),
            });
        },
        read(badgeId) {
            return callApi(`/badges/${badgeId}`);
        },
        update(badgeId, updates) {
            return callApi(`/badges/${badgeId}`, {
                method: 'PUT',
                body: JSON.stringify(updates),
            });
        },
        // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
        remove(badgeId) {
            return callApi(`/badges/${badgeId}`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;