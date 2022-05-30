import axios from "axios";
// https://front-test.beta.aviasales.ru/search

export const makeRequest = async (method, url, data={}, headers, params={}) => {
    const options = {
        method,
        url,
        data,
        params,
        headers: headers ?? { 'Content-Type': 'application/transit+json' },
    }

    try {
        return await axios(options);
    } catch (e) {
        return new Error(e)
    }
}


// export const someTest = async () => {
//     const resolve = await makeRequest('get', 'https://front-test.beta.aviasales.ru/search'))
//     return resolve
// }