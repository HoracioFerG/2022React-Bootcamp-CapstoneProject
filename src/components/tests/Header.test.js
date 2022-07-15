import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "../Header";

test("It should render Ecommerce name", () => {
  const component = render(<Header />);
  const ecommerceName = component.getByText("Luxury Furniture");

  expect(ecommerceName).toHaveTextContent("Luxury Furniture");
  expect(ecommerceName).toHaveClass("brand-text");
});

test("It should render Ecommerce logo", () => {
  const component = render(<Header />);
  const image = component.getByAltText("logo");

  expect(image).toHaveClass("logo");
});
