import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
/**
    {API_URL}/manufacturers
 * @param empty
 * @return promise
 */
const getManufacturers = async () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios.get(`${API_URL}/manufacturers`);

        if (response.status === 200) {
            resolve({ manufacturers: response.data.manufacturers });
        } else {
            reject(response.statusText);
        }
    } catch (error) {
        console.error(error);
        reject(error);
    }
});


export const manufacturersService = { getManufacturers };