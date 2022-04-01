interface ICar {
    car: this;
    stockNumber: number;
    manufacturerName?: string;
    modelName: string;
    mileage: IMileage;
    fuelType?: string;
    color?: string;
    pictureUrl?: string;
}



// {
//     "stockNumber": 41400,
//     "manufacturerName": "Fiat",
//     "modelName": "Marea",
//     "mileage": {
//       "number": 100141,
//       "unit": "km"
//     },
//     "fuelType": "Diesel",
//     "color": "white",
//     "pictureUrl": "http://localhost:3001/car.svg"
//   }
