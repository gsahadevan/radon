import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../Card';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
    children: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
};
