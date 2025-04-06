import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
    icon: IconType;
    text: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ icon: Icon, text }) => {
    return (
        <div className="flex flex-col justify-center items-center p-4 max-w-xs transition-transform transform hover:scale-105">
            <Icon className="text-6xl mb-4" />
            <p className="text-2xl">{text}</p>
        </div>
    );
});
