// // import ErrorPage from "./ErrorPage";
// // import LoadingPage from "./LoadingPage";

// import ErrorPage from "./ErrorPage";
// import LoadingPage from "./LoadingPage";
// import UserTemplate from "./UserTemplate";

// jest.mock(ErrorPage);
// jest.mock(LoadingPage);
// jest.mock(UserTemplate);
// jest.mock("fetchers/users");

// (ErrorPage).mockReturnValue(
//     <div data-testid="error-page-testid" />
// );

// (LoadingPage).mockReturnValue(
//     <div data-testid="loading-page-testid" />
// );
// (UserTemplate).mockReturnValue(
//     <div data-testid="user-template-page-testid" />
// );

// describe("User Page", () => {
//     it("Is error page rendered", () => {
//         (fetchUsers).mockResolvedValue(new Error("Error occurred!"));

//         const { findByTestId } = render(<UserPage />);

//         expect(findByTestId("error-page-testid")).toBeDefined();
//     });

//     it("Is loading page rendered", () => {
//         (fetchUsers).mockResolvedValue(null);

//         const { findByTestId } = render(<UserPage />);

//         expect(findByTestId("loading-page-testid")).toBeDefined();
//     });

//     it("Is loading page rendered", () => {
//         (fetchUsers).mockResolvedValue([{ username: "test user" }]);

//         const { findByTestId } = render(<UserPage />);

//         expect(findByTestId("user-template-page-testid")).toBeDefined();
//     });
// });
