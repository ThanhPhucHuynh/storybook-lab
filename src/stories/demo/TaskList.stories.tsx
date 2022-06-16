import { ComponentStory } from "@storybook/react";
import React from "react";

import TaskList from "../../components/TaskList/TaskList";
import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
};

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);
const argsDefaultTaskStories = {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  }
export const Default = Template.bind({});
const argsDefault = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.js.
    tasks: [
      { ...argsDefaultTaskStories.task, id: "1", title: "Task 1" },
      { ...argsDefaultTaskStories.task, id: "2", title: "Task 2" },
      { ...argsDefaultTaskStories.task, id: "3", title: "Task 3" },
      { ...argsDefaultTaskStories.task, id: "4", title: "Task 4" },
      { ...argsDefaultTaskStories.task, id: "5", title: "Task 5" },
      { ...argsDefaultTaskStories.task, id: "6", title: "Task 6" },
    ],
  }
Default.args = argsDefault;

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...argsDefault.tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
