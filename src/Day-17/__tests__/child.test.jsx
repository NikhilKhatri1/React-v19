import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Child from "../components/Child";


test("Data Correctly passing in child", () => {
    const { getByTestId } = render(<Child count={500} />);
    const CountValueInChildElement = getByTestId("countValue");
    expect(CountValueInChildElement.textContent).toBe("500");
})

test("Theme toggle", () => {
    const { getByTestId } = render(<Child />);
    const getThemeBtnElementId = getByTestId("themeBtn");
    const getThemeValueElementId = getByTestId("themeValue");
    expect(getThemeValueElementId.textContent).toBe("true");
    fireEvent.click(getThemeBtnElementId);
    expect(getThemeValueElementId.textContent).toBe("false");
})