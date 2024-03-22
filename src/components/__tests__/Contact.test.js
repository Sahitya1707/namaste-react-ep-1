import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  //   assertion
  expect(heading).toBeInTheDocument();
});
