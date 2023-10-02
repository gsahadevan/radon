import { ReactNode } from 'react';

export interface TransitionProps {
    children?: ReactNode;
    show?: boolean;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    appear?: string;
}
