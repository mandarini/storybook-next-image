import type { Meta } from '@storybook/react';
import { MyComponent } from './my-component';

const Story: Meta<typeof MyComponent> = {
  component: MyComponent,
  title: 'MyComponent',
};
export default Story;

export const Primary = {
  args: {},
};
