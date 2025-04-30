import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "../components/Counter";


test("Test Count Logic", () => {
    const { getByText } = render(<Counter />);

    const getCounterText = getByText("Count: 0");

    const getCounterButtonElement = getByText("click +");

    fireEvent.click(getCounterButtonElement);

    expect(getCounterText.textContent).toBe("Count: 1");
})