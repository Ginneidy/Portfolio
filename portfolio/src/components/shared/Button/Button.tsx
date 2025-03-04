interface ButtonProps {
    onClick?: () => void;
    text: string;
    variant?: "primary" | "secondary";
    href?: string;
    download?: boolean;
}

const buttonBaseClasses =
    "text-xl md:text-xl font-light px-4 py-2 md:px-6 md:py-3 transition-all duration-300  before:ease relative overflow-hidden shadow-md before:absolute before:right-0  before:top-0 before:h-12  before:w-6 before:translate-x-12  before:rotate-6 before:opacity-10  before:duration-700  hover:shadow-[#c4c4c4] hover:before:-translate-x-44";

const variantClassesMap = {
    primary: "bg-[#738290] text-white  before:bg-[#FFFF]",
    secondary: "bg-transparent text-black border-2 border-black before:bg-[#c4c4c4]",
    default: 'bg-gray-500 before:bg-[#FFFF]'
};

export const Button: React.FC<ButtonProps> = ({ onClick, text, variant = "primary", href, download }) => {

    const variantClasses = variantClassesMap[variant] || variantClassesMap.default;
    if (href) {
        return (
            <a
                href={href}
                download={download ? true : undefined}
            >
                <button
                    onClick={onClick}
                    className={`${buttonBaseClasses} ${variantClasses}  `} >
                    <span className="relative z-10" >
                        {text}
                    </span>
                </button>
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${buttonBaseClasses} ${variantClasses}  `} >
            <span className="relative z-10" >
                {text}
            </span>
        </button>
    );
};