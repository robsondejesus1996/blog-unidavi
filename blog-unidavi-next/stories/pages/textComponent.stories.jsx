import { TextComponent } from '../../src/components/TextComponent/';

export default {
  title: 'TextComponent/TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nihil iusto doloremque quas animi deleniti voluptatibus
    eligendi amet necessitatibus? Illo, blanditiis nulla aut
     placeat dolor ipsa consequatur inventore animi odio consequuntur`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
