import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
/**
    {API_URL}/cars
 * @param empty
 * @return promise
 */
const getCars = async () => new Promise(async (resolve, reject) => {
    try {
        let url = `${API_URL}/cars`;

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

/**
    {API_URL}/cars
 * @param criteria
 * @return promise
 */
const getCarsByCriteria = async (params) => new Promise(async (resolve, reject) => {
    try {
        const { Color: color, Manufacturer: manufacturer, page = 1, sort } = params;
        let url = new URL(`${API_URL}/cars`), urlParams = {};

        if (color) {
            urlParams = { ...urlParams, "color": color }
        }
        if (manufacturer) {
            urlParams = { ...urlParams, "manufacturer": manufacturer }
        }
        if (page) {
            urlParams = { ...urlParams, "page": page }
        }
        if (sort) {
            urlParams = { ...urlParams, "sort": sort }
        }

        const response = await axios.get(`${API_URL}/cars`, {
            params: urlParams
        });


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

/**
    {API_URL}/cars
 * @param id
 * @return promise
 */
const getCarsByStockNumber = async ({ params }) => new Promise(async (resolve, reject) => {
    try {
        const { stock } = params;

        let url = `${API_URL}/cars/${stock}`;
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


export const carsServices = { getCars, getCarsByCriteria, getCarsByStockNumber };