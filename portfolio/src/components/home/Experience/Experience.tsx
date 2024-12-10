import { ExperienceCard } from "./ExperienceCard";


export const Experience = () => {
    return (
        <section id="experience" >
            <h2>Experience</h2>
            <div className="mt-5" >
                <ExperienceCard
                    position="Software Developer"
                    company="Company Name"
                    location="City, Country"
                    startDate="Month Year"
                    endDate="Month Year"
                    description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />
            </div>
        </section>
    );
}