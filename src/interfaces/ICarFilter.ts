
interface ICarFilter {
    car: this;
    stockNumber?: number;
    Manufacturer?: string;
    modelName?: string;
    Color?: string;
    page?: number;
    sort?: ISort | unknown;
    stock?: number;
}