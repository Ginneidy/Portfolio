import { Hobbies } from "../Hobbies";

export const About = () => {
    return (
        <section id="about" >
            <h2 className="text-center" id="about" >About me</h2>
            <div className="flex flex-col md:flex-row items-center mt-8 md:mt-12" >
                <div className="w-full md:w-1/3 mb-8 md:mb-0" >
                    <img className="rounded-full mx-auto md:float-right w-2/3 md:w-full"
                        src="https://th.bing.com/th/id/OIG4.6fQPTQvF3cRCfkLk2V3c?w=1024&h=1024&rs=1&pid=ImgDetMain"
                        alt="profile"
                    />

                </div>
                <div className="w-full md:pl-10 md:w-2/3" >
                    <p className="text-center md:text-right font-light text-lg md:text-xl" >
                        Programing is a vast universe where ideas take shape. I am Ginneidy Leon, a <strong className="font-medium" >systems engineer and full stack developer.</strong>  With  <strong className="font-medium" >over a year of experience</strong>  in software development, I have worked in frontend, backend, and mobile development, excelling in <strong className="font-medium" >NET, Flutter, React Native, React.js</strong>, and databases like MySQL and PostgreSQL.
                        <br /> <br />
                        I thrive in software engineering projects where I can apply my organizational and methodological skills to achieve concrete goals, as reflected in the <strong className="font-medium" >projects I have developed</strong> throughout my career. During my university years, I served as the president of IEEE, which enhanced my leadership and teamwork abilities.
                        <br /> <br />
                        Besides my passion for programming, <strong className="font-medium" >I have a B2 level in English</strong>  and studied Japanese for two years, continuing my learning independently. I am passionate about learning and discovering new skills.
                        <br /> <br />
                        If you are looking for a passionate, creative, and committed person for your team, I would be delighted to  <strong className="font-medium" >connect and bring great ideas to life together!</strong>
                    </p>
                </div>

            </div>
            <Hobbies />
        </section>
    );
}