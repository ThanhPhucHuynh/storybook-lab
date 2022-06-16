import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, userEvent, waitFor } from "@storybook/testing-library";

import InputComponent from "../../components/InputComponent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Demo/InputComponent",
  component: InputComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

const TemplateSecond: ComponentStory<typeof InputComponent> = () => (
  <form>
    <InputComponent label="Email" placeholder="Email" dataTestid="email" />
    <InputComponent label="Phone" placeholder="Phone" dataTestid="phone" />
    <InputComponent label="CMND" placeholder="CMND" dataTestid="cmnd" />
    <button type="submit" ></button>
  </form>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "email",
  dataTestid: "custom-element",
  isUpperCase: true,
};

Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const x = canvas.getByTestId("custom-element");
  await userEvent.type(x, "hi@example.com");
  await expect(x).toHaveValue("HI@EXAMPLE.COM");
  await userEvent.clear(x);

  await userEvent.type(x, "ba@example.com");
  await expect(x).toHaveValue("BA@EXAMPLE.COM");
};

export const Second = TemplateSecond.bind({});

Second.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId("email"), "hi@example.com");
  await userEvent.type(canvas.getByTestId("phone"), "0347766101");
  await userEvent.type(canvas.getByTestId("cmnd"), "075465463131");
  // await userEvent.click(canvas.getByRole('button'));

  // await waitFor(() => expect().toHaveBeenCalled());
};
