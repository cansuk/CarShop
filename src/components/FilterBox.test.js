import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../styled-components/Button";

describe("FilterBox", () => {
    it("Is rendering", () => {
        const buttonTxt = "Filter";

        render(<Button> {buttonTxt} </Button>);

        expect(screen.getByText(buttonTxt)).toBeDefined();
    });

    it("Is onClick called", () => {
        const buttonTxt = "Filter";
        const testOnClick = jest.fn();

        render(<Button onClick={testOnClick}>{buttonTxt}</Button>);

        userEvent.click(screen.getByText(buttonTxt));

        expect(testOnClick).toBeCalledTimes(1);
    });
});