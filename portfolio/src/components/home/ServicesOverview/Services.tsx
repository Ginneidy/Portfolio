import { ServiceCard } from "./ServiceCard";
import { MdDeveloperMode } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { BiCodeCurly } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";

const serviceData = [
    {
        icon: FaCode,
        text: "Frontend",
    },
    {
        icon: BiCodeCurly,
        text: "Backend",
    },
    {
        icon: MdDeveloperMode,
        text: "Mobile",
    },
    {
        icon: IoDocumentTextOutline,
        text: "Functional Analyst",
    },
];

export const Services = () => {
    return (
        <section>
            <h2 >What I do?</h2>
            <div className="flex flex-wrap justify-between gap-6 mt-6" >
                {serviceData.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
}