import { IconType } from 'react-icons';

interface ButtonProps {
    icon: IconType;
    onClick: () => void;
    variant?: "primary" | "secondary" | "tertiary";
    color?: string;
}

const buttonBaseClasses = "rounded-full flex items-center justify-center text-white transition-transform duration-300";

const variantStyles = {
    primary: {
        button: "w-9 h-9 hover:shadow-lg hover:scale-110 bg-black",
        icon: "w-6 h-6"
    },
    secondary: {
        button: "w-28 h-28",
        icon: "w-16 h-16"
    },
    tertiary: {
        button: "w-9 h-9",
        icon: "w-6 h-6 text-black"
    },
    default: {
        button: "w-9 h-9 hover:shadow-lg hover:scale-110 bg-black",
        icon: "w-6 h-6"
    }
}

export const IconButton: React.FC<ButtonProps> = ({ icon: Icon, onClick, variant = "primary", color }) => {
    const { button: variantButtonClasses, icon: variantIconClasses } = variantStyles[variant] || variantStyles.default;

    return (
        <button
            onClick={onClick}
            className={`${buttonBaseClasses} ${variantButtonClasses}`}
            style={{ backgroundColor: color || 'black' }}
            aria-label='icon button'
        >
            <Icon className={`${variantIconClasses}`} />
        </button>
    );
};
