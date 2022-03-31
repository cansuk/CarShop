import axios from 'axios';
import { carsServices } from './Cars';

jest.mock('axios');

test('should fetch cars', () => {
    const cars = [{ manufacturer: 'Audi' }]; // TODO FULL DATA
    const response = { data: cars };
    axios.get.mockResolvedValue(response);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return carsServices.getCars().then(data => expect(data).toEqual(cars));
});