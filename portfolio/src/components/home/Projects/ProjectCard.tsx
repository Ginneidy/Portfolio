export interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    languages?: React.ReactNode[];
    link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, languages, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="relative border border-gray-500 shadow-md overflow-hidden w-full max-w-sm group cursor-pointer">
                <div className="px-2 py-3">
                    <h2 className="text-xl font-medium text-black">{title}</h2>
                </div>
                <div className="relative h-64 bg-slate-500">
                    <img src="https://via.placeholder.com/150" alt={title} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black bg-opacity-55 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-white text-center p-4">{description}</p>
                    </div>
                </div>
                <div className="p-4 bg-black">
                    {languages && (
                        <div className="flex flex-wrap gap-2 justify-end">
                            {languages.map((language, index) => (
                                <span key={index}>
                                    {language}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
};
