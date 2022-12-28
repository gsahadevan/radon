import { IButton } from './IButton';

export const Button = ({ text }: IButton): JSX.Element => {
    return <button className='px-4 py-2 rounded bg-indigo-600 text-indigo-100'>{text}</button>;
};
