const sortOptions = [
    { value: "asc", text: "Mileage-Ascending", selected: false },
    { value: "des", text: "Mileage-Descenging", selected: false }
];

const paginatorOptions =
{
    itemCountPerPage: 10 // in case of api allows this parameter, currently it sends 10 items constantly
};

const messages = {
    notFoundMsg: `Sorry, the page you are looking for does not exist. `,
    stockPositiveMsg: `This car is currently available and can be delivered as soon as 
    tomorrow morning. Please be aware that delivery times shown in
    this page are not definitive and may change due to bad weather 
    conditions.`,
    stockNegativeMsg: `
    This car is not currently available... 
    `,
    addToFavoritesMsg: `If you like this car, click the button and 
    save it in your collection of favourite items`,
    removeFromFavoritesMsg: `It is in your favorites list`
}

export const routeKeys = {
    purchase: "purchase",
    orders: "orders",
    sell: "sell",

}

export const Constants = { sortOptions, paginatorOptions, messages, routeKeys };