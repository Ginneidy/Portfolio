import { HobbiesCard } from "./HobbiesCard";
import { HiOutlineCube } from "react-icons/hi2";

export const Hobbies = () => {
    return (
        <div className="mt-16 lg:mt-28 px-4 md:px-5 lg:px-10 xl:px-20">
            <h3 className="font-medium text-center lg:text-left mb-8">Hobbies</h3>
            <div className="space-y-10">
                <HobbiesCard
                    imageSrc="/rubik.png"
                    title="Speedcubing"
                    description={
                        <>
                            I've practiced speedcubing for over 10 years and am the fastest woman in my country to solve a Rubik's cube blindfolded, as verified by{" "}
                            <a
                                href="https://www.worldcubeassociation.org/results/rankings/333bf/single?gender=Female&region=Colombia"
                                className="text-blue-500 hover:text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                the WCA
                            </a>
                            . This hobby has instilled in me motivation, perseverance, and strong problem-solving skills. It also enhances my ability to think quickly and implement efficient solutions under pressure. The practice requires intense focus, quick decision-making, and the ability to devise and implement efficient algorithms, which are directly applicable to my work in software development and systems engineering.
                        </>
                    }
                />

                <HobbiesCard
                    imageSrc="/sudoku.png"
                    title="Speedcubing"
                    description={
                        <>I have a deep love for solving Sudoku puzzles, which has not only sharpened my analytical skills but also inspired me to share this passion with others. As part of the IEEE and Computer Society at my university, I took the initiative to organize Sudoku tournaments. These events brought together puzzle enthusiasts, fostered a sense of community, and allowed me to develop my organizational and leadership skills.
                        </>
                    }
                />
            </div>
        </div>
    );
};

