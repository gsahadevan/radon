import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

export default {
    title: 'Components/Inputs/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    text: 'Submit',
};
