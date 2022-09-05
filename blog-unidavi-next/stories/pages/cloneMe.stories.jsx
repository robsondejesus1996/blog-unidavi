import { CloneMe } from '../../src/components/CloneMe';


export default{
    title: 'CloneMe/CloneMe',
    component: CloneMe,
    args: {
      children: 'CloneMe',
      
    },
    argTypes: {
      children: { type: 'string' },
     
    },
};


export const Template = (args) => {
    return (
      <div>
        <CloneMe {...args} />
      </div>
    );
  };