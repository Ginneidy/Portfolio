"use client"
import { Button, IconButton } from "app/components/shared/Button"
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export const Hero = () => {
    return (

        <section className="mt-12 md:mt-28" >
            <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left" >
                    <h1 className="text-3xl lg:text-4xl	font-medium	" >
                        <span className="font-normal" > {"Hi, I'm"} </span>Ginneidy Leon
                    </h1>
                    <p className="font-light text-2xl">
                        <span className="font-normal" > Systems engineer  </span>
                        <br /> and  <span className="font-normal" >Full stack </span> developer
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4" >
                        <Button text="Contact me" href="mailto:ginneidy@gmail.com" />
                        <Button text="Download CV" href="https://rose-pollyanna-8.tiiny.site" variant="secondary" download />
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-6 items-center" >
                        <IconButton icon={TbBrandGithubFilled} onClick={() => window.open("https://github.com/ginneidy", "_blank")} />
                        <IconButton icon={IoMdMail} onClick={() => window.location.href="mailto:ginneidy@gmail.com"} />
                        <IconButton icon={FaLinkedinIn} onClick={() => window.open("https://www.linkedin.com/in/ginneidy/", "_blank")} />
                    </div>

                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                    <img
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-[25rem] lg:h-[25rem]"
                        src="/Avatar.png"
                        alt="logo"
                    />
                </div>
            </div>

        </section>

    )
}
