import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Transition } from '../Transition';

export default {
    title: 'Components/Utils/Transition',
    component: Transition,
    argTypes: {},
} as ComponentMeta<typeof Transition>;

const Template: ComponentStory<typeof Transition> = args => (
    <Transition {...args}>
        <div>hello</div>
    </Transition>
);

export const Menu = Template.bind({});
Menu.args = {
    show: true,
    enter: 'transition ease-out duration-100 transform',
    enterTo: 'opacity-100 scale-100',
    enterFrom: 'opacity-0 scale-95',
    leave: 'transition ease-in duration-75 transform',
    leaveTo: 'opacity-0 scale-95',
    leaveFrom: 'opacity-100 scale-100',
};
