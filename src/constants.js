const sortOptions = [
    { value: "asc", text: "Mileage-Ascending", selected: false },
    { value: "desc", text: "Mileage-Descenging", selected: false }
];

const paginatorOptions =
{
    itemCountPerPage: 10 // in case of api allows this parameter, currently it sends 10 items constantly
};

export const Constants = { sortOptions, paginatorOptions };