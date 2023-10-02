import { IBadge } from './IBadge';

const Badge = ({text} : IBadge) => {
    return (
        <div className="inline-block bg-blue-500 text-white text-xs font-bold px-2 rounded-full">
            {text}
        </div>
    );
};

export default Badge;
