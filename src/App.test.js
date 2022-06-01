import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app with an image, a quote and a button", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button");
  const imageElement = screen.getByRole("img");
  const textElement = screen.getByRole("contentinfo");

  expect(buttonElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
