"use client"

import { FaHtml5, FaCss3, FaPython, FaReact, FaGithub, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
    SiCsharp, SiDart,
    SiNextdotjs, SiDotnet,
    SiJest, SiPytest, SiNodedotjs,
    SiDjango, SiFlutter, SiJira, SiClickup, SiPostgresql, SiMysql, SiMongodb, SiDocker
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IconButton } from "app/components/shared/Button";
import { InfiniteCarousel } from "app/components/shared/Carousel";
import { TbSql } from "react-icons/tb";

export const Skills: React.FC = () => {

    const tools = [
        {
            icon: FaGithub,
            color: "#181717",
            name: "GitHub"
        },
        {
            icon: SiJira,
            color: "#0052CC",
            name: "Jira"
        },
        {
            icon: SiClickup,
            color: "#7B68EE",
            name: "Clickup"
        },
        {
            icon: SiPostgresql,
            color: "#336791",
            name: "PostgreSQL"
        },
        {
            icon: SiMysql,
            color: "#4479A1",
            name: "MySQL"
        },
        {
            icon: SiMongodb,
            color: "#47A248",
            name: "MongoDB"
        },
        {
            icon: SiDocker,
            color: "#2496ED",
            name: "Docker"
        },
        {
            icon: FaAws,
            color: "#232F3E",
            name: "AWS"
        }


    ]

    const frameworks = [
        {
            icon: FaReact,
            color: "#61DAFB",
            name: "React.js"
        },
        {
            icon: FaReact,
            color: "#292929",
            name: "React Native"
        },
        {
            icon: SiFlutter,
            color: "#02569B",
            name: "Flutter"
        },
        {
            icon: SiNextdotjs,
            color: "#000000",
            name: "Next.js"
        },
        {
            icon: SiDjango,
            color: "#092E20",
            name: "Django"
        },
        {
            icon: SiNodedotjs,
            color: "#3C873A",
            name: "Node.js"
        },
        {
            icon: SiDotnet,
            color: "#5027D5",
            name: ".NET"
        },
        {
            icon: SiJest,
            color: "#C21325",
            name: "Jest"
        },
        {
            icon: SiPytest,
            color: "#0A9EDC",
            name: "Pytest"
        }
    ]

    const programmingLanguages = [

        {
            icon: IoLogoJavascript,
            color: "#F7DF1C",
            name: "JavaScript"
        },
        {
            icon: BiLogoTypescript,
            color: "#2E78C7",
            name: "TypeScript"
        },

        {
            icon: FaHtml5,
            color: "#E44D27",
            name: "HTML5"
        },
        {
            icon: FaCss3,
            color: "#264DE4",
            name: "CSS3"
        },
        {
            icon: FaPython,
            color: "#3C73A2",
            name: "Python"
        },
        {
            icon: TbSql,
            color: "#DF6C1A",
            name: "SQL"
        },
        {
            icon: SiCsharp,
            color: "#9E73D9",
            name: "C#"
        },

        {
            icon: SiDart,
            color: "#2CB6F6",
            name: "Dart"
        }
    ];

    return (
        <section id="skills" className="space-y-12" >
            <div>
                <h2 className="text-right" >My Skills</h2>
                <div className="mt-5">
                    <h3 className="text-left" >Programming Languages</h3>
                    <div className="" >
                        <InfiniteCarousel elements={programmingLanguages.map((language) => (
                            <div>
                                <IconButton icon={language.icon} onClick={() => console.log("hola")} variant="secondary" color={language.color} />
                                <span>{language.name}</span>
                            </div>
                        ))
                        } />
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-left" >Frameworks & Libraries</h3>
                    <div className="mt-6" >
                        <InfiniteCarousel elements={frameworks.map((framework) => (
                            <div>
                                <IconButton icon={framework.icon} onClick={() => console.log("hola")} variant="secondary" color={framework.color} />
                                <span>{framework.name}</span>
                            </div>
                        ))
                        } />
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-left" >Tools & Platforms</h3>
                    <div className="mt-6" >
                        <InfiniteCarousel elements={tools.map((tool) => (
                            <div>
                                <IconButton icon={tool.icon} onClick={() => console.log("hola")} variant="secondary" color={tool.color} />
                                <span>{tool.name}</span>
                            </div>
                        ))
                        } />
                    </div>
                </div>
            </div>
        </section>
    );
};