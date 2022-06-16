import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import ButtonComponent, {
  IButtonComponentProps,
} from "../../components/ButtonComponent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Demo/ButtonComponent",
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const argsPrimary: Partial<IButtonComponentProps> = {
  child: "Label",
  color: "primary",
  onClick: (e) => {
    console.log(e);
    return "2"
  },
};
Primary.args = argsPrimary;
Primary.play =async ({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  // await expect(args.onClick).toHaveBeenCalled();
}

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  child: "Label secondary",
  color: "secondary",
  onClick: (e) => {
    console.log(e);
  },
};

