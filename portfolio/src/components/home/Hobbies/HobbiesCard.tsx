interface HobbiesCardProps {
    title: string;
    description: string | React.ReactNode;
    imageSrc?: string;
}

export const HobbiesCard: React.FC<HobbiesCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-center p-6 space-y-4 lg:space-y-0 lg:space-x-6 min-h-[300px]">
            {/* Square Image Container */}
            <div className="flex items-center justify-center w-32 h-32  overflow-hidden">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
            </div>
            {/* Content Section */}
            <div className="text-center lg:text-left flex-1">
                <h4 className="font-medium text-xl mb-2">{title}</h4>
                {typeof description === "string" ? (
                    <p className="font-light text-xl text-justify">{description}</p>
                ) : (
                    <div className="font-light text-xl text-justify">{description}</div>
                )}
            </div>
        </div>
    );
};

