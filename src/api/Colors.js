import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
/**
    {API_URL}/colors
 * @param empty
 * @return promise
 */
const getColors = async () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios.get(`${API_URL}/colors`);

        if (response.status === 200) {
            resolve({ colors: response.data.colors });
        } else {
            reject(response.statusText);
        }
    } catch (error) {
        console.error(error);
        reject(error);
    }
});


export const colorsServices = { getColors };