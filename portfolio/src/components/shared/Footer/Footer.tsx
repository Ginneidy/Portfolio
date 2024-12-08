"use client"

import { FaPhone } from "react-icons/fa6";
import { IconButton } from "../Button";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
        <section id="contact">
            <footer className="bg-black text-white text-center py-8 mt-28">
                <h3 className="text-2xl md:text-3xl" >Contact Me</h3>
                <div className="mt-9 space-y-6">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8" >
                        <div className="flex items-center space-x-2 text-lg md:text-xl" >
                            <IoMdMail className="my-auto" />
                            <p >ginneidy@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2 text-lg md:text-xl" >
                            <FaPhone className="my-auto" />
                            <p>+57 3112928043</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-8" >
                        <IconButton icon={FaLinkedinIn} onClick={() => console.log("hola")} variant="tertiary" color="#FFFF" />
                        <IconButton icon={TbBrandGithubFilled} onClick={() => console.log("hola")} variant="tertiary" color="#ffff" />
                    </div>
                    <p className="text-xs md:text-sm mt-8 font-extralight" >© 2024 Ginneidy Leon</p>
                </div>
            </footer>
        </section>
    )
}