import { ICard } from './ICard';

export const Card = ({ children }: ICard): JSX.Element => {
    return (
        <div className='p-2 min-w-0 rounded ring-1 ring-black ring-opacity-5 shadow-black overflow-hidden bg-white'>
            {children}
        </div>
    );
};
