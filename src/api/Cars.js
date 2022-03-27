import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
/**
    {API_URL}/colors
 * @param empty
 * @return promise
 */
const getCars = async (params) => new Promise(async (resolve, reject) => {
    try {
        let url;
        if (params) {
            // TODO CANSU BURADA KALDIM !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // https://auto1-mock-server.herokuapp.com/api/cars?sort=asc&page=1 FORMATINDA OLMALI SORT İÇİN
            const { Color: color = "", Manufacturer: manufacturer = "", page = 1 } = params;
            url = `${API_URL}/cars?color=${color}&manufacturer=${manufacturer}&page=${page}`;
        } else {
            url = `${API_URL}/cars`;
        }
        const response = await axios.get(url);

        if (response.status === 200) {
            resolve(response.data);
        } else {
            reject(response.statusText);
        }
    } catch (error) {
        console.error(error);
        reject(error);
    }
});


export const carsServices = { getCars };