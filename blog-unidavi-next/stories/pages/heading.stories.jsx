import { Heading } from '../../src/components/Heading';

export default {
  title: 'Heading/Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    
  },
  argTypes: {
    children: { type: 'string' },
   
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};