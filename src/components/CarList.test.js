// import { getByTestId, render, screen } from "@testing-library/react";
// import { carsServices } from "../api/Cars";
// import ErrorPage from "../pages/ErrorPage";
// import LoadingPage from "../pages/LoadingPage";
// // import CarList from "./CarList";

// jest.mock("../src/CarsList");

// jest.mock(CarList);

// jest.mock(ErrorPage);
// jest.mock(LoadingPage);
// jest.mock(carsServices.getCars);


// (CarList).mockReturnValue(
//     <div data-testid="carlist-testid" />
// );
// (ErrorPage).mockReturnValue(
//     <div data-testid="errorpage-testid" />
// );

// describe("CarsList", () => {
//     // it("Is error page rendered", () => {
//     //     (carsServices.getCars).mockResolvedValue(new Error("Error occurred!"));

//     //     render(<CarList />);

//     //     expect(screen.getByTestId("errorpage-testid")).toBeDefined();
//     // });

//     // it("Is loading page rendered", () => {
//     //     (carsServices.getCars).mockResolvedValue(null);

//     //     render(<CarList />);

//     //     expect(screen.getByTestId("loading-page-testid")).toBeDefined();
//     // });

//     it("Is cars list rendered", () => {
//         (carsServices.getCars).mockResolvedValue([{ manufacturer: "Audi" }]);

//         render(<CarList data-testid="carlist-testid" />);

//         expect(screen.getByTestId("carlist-testid")).toBeDefined();
//     });
// });
