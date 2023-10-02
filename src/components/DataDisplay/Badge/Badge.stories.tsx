import { ComponentMeta, ComponentStory,  } from '@storybook/react';
import Badge from '../Badge';

export default {
    title: 'Components/DataDisplay/Badge',
    component: Badge,
    argTypes: {},
} as ComponentMeta<typeof Badge>;


const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const PrimaryBadge = Template.bind({});
PrimaryBadge.args = {
    text: 'Submit',
};
