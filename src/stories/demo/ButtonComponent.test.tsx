import { Primary, argsPrimary, Secondary } from "./ButtonComponent.stories";
import { render, screen } from "@testing-library/react";

test("should render primary button", () => {
  render(<Primary {...argsPrimary} child={"Test"} />);
  expect(screen.getByRole("button")).toHaveTextContent(/test/i);
});

test("should render secondary button", () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Label secondary/i);
});
