import { Primary, Secondary } from "./ButtonComponent.stories";
import { render, screen } from "@testing-library/react";

test("should render primary button", () => {
  render(<Primary {...Primary.args} child={"Test"} />);
  expect(screen.getByRole("button")).toHaveTextContent(/test/i);
});

test("should render secondary button", () => {
  render(<Secondary {...Secondary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Label secondary/i);
});
