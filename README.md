import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Display result button disabled after adding only first number", () => {
  const { container } = render(<App />);
  const firstNumberInput = container.querySelector("#Text1"); // Updated to use getByTestId
  const displayResultButton = container.querySelector("button[name='clickbtn']");

  // Type a number into the first input
  fireEvent.change(firstNumberInput, { target: { value: "10" } });

  // Check that the button is disabled
  expect(displayResultButton).toBeDisabled();
});

test("Display result button disabled after adding only second number", () => {
  const { container } = render(<App />);
  const secondNumberInput = container.querySelector("#Text2");// Updated to use getByTestId
  const displayResultButton = container.querySelector("button[name='clickbtn']");

  // Type a number into the second input
  fireEvent.change(secondNumberInput, { target: { value: "20" } });

  // Check that the button is disabled
  expect(displayResultButton).toBeDisabled();
});

// test("Add two numbers and display result", () => {
//   const { container } = render(<App />);
//   const firstNumberInput = screen.getByTestId("Text1"); // Updated to use getByTestId
//   const secondNumberInput = screen.getByTestId("Text3"); // Updated to use getByTestId
//   const displayResultButton = screen.getByText("Display Result");

//   // Type numbers into both inputs
//   fireEvent.change(firstNumberInput, { target: { value: "10" } });
//   fireEvent.change(secondNumberInput, { target: { value: "20" } });

//   // Check that the button is enabled
//   expect(displayResultButton).not.toBeDisabled();

//   // Click the button to calculate the result
//   fireEvent.click(displayResultButton);

//   // Check that the result input displays the correct value
//   const resultInput = screen.getByTestId("result"); // Updated to use getByTestId
//   expect(resultInput.value).toBe("30");
// });
