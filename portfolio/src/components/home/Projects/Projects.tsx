"use client"

import { IconButton } from "app/components/shared/Button";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import { FaHtml5 } from "react-icons/fa";
import Slider from "react-slick";
import styles from './styles.module.css';
import React from 'react';

export const Projects = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="projects">
            <h2 className="text-center mb-5">Projects</h2>

            <div className="slider-container">
                <Slider {...settings}>
                    {projectData.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

const projectData: ProjectCardProps[] = [
    {

        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Four Parks",
        description: "Four Parks es una plataforma web que permite a los usuarios reservar y gestionar espacios de parqueo en varias ciudades, ofreciendo herramientas administrativas para optimizar el uso del espacio.",
        link:"https://github.com/Ginneidy/Four_Parks_CO_Backend",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],

    },
    {
        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Project title",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],
    },
    {
        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Project title",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],
    },
    {
        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Project title",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],
    }
    ,
    {
        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Project title",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],
    }
    ,
    {
        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Project title",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],
    }
    ,
    {
        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Project title",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],
    }
    ,
    {
        image: "https://www.crestinfotech.com/wp-content/uploads/2023/04/mobile-ui-design.jpg",
        title: "Project title",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        languages: [
            <IconButton key="html" icon={FaHtml5} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />,
        ],
    }

]