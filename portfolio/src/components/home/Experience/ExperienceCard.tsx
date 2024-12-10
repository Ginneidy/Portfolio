interface ExperienceCardProps {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ position, company, location, description, startDate, endDate }) => {
    return (
        <div className="experience-card">
            <h3 className="font-normal mb-1" >{`${position} - ${company} (${startDate} - ${endDate ? endDate : "Present"})`} </h3>
            <h4 className="font-normal text-xl italic mb-4" >{location}</h4>
            <p className="font-light text-lg text-justify" >{description}</p>
        </div>
    );
}
