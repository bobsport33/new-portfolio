import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import ReactIcon from "../public/svg/react-svgrepo-com (1).svg";
import NextIcon from "../public/svg/nextjs-fill-svgrepo-com.svg";
import TSIcon from "../public/svg/typescript-svgrepo-com.svg";
import JSIcon from "../public/svg/javascript-155-svgrepo-com.svg";
import PHPIcon from "../public/svg/php-svgrepo-com.svg";
import PythonIcon from "../public/svg/python-127-svgrepo-com.svg";
import SassIcon from "../public/svg/sass-fill-svgrepo-com.svg";
import WordpressIcon from "../public/svg/wordpress-139-svgrepo-com.svg";

const SkillsCont = styled.section`
    width: 90%;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .skill__heading {
        color: ${colors.neutral200};
    }

    .skill__row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .skill__icon {
        height: 80px;
        width: 80px;

        svg {
            path {
                fill: ${colors.neutral400};
            }
        }
    }

    .skill__name {
        color: ${colors.neutral100};
    }
`;

const Skills = () => {
    return (
        <SkillsCont>
            <h3 className="skill__heading">Skills</h3>
            <div className="skill__row">
                <div className="skill">
                    <div className="skill__icon">
                        <ReactIcon />
                    </div>
                    <h6 className="skill__name">React</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <NextIcon />
                    </div>
                    <h6 className="skill__name">NextJS</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <ReactIcon />
                    </div>
                    <h6 className="skill__name">React Native</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <TSIcon />
                    </div>
                    <h6 className="skill__name">Typescript</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <JSIcon />
                    </div>
                    <h6 className="skill__name">Javascript</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <PHPIcon />
                    </div>
                    <h6 className="skill__name">PHP</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <WordpressIcon />
                    </div>
                    <h6 className="skill__name">Wordpress</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <PythonIcon />
                    </div>
                    <h6 className="skill__name">Python</h6>
                </div>
                <div className="skill">
                    <div className="skill__icon">
                        <SassIcon />
                    </div>
                    <h6 className="skill__name">Sass</h6>
                </div>
            </div>
        </SkillsCont>
    );
};

export default Skills;
