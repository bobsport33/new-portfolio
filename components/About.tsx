import React from "react";
import styled from "styled-components";
import { colors, media } from "../styles/variables";

const AboutCont = styled.section`
    display: flex;
    gap: 80px;
    width: 85%;
    align-items: center;
    margin: 80px auto;

    @media ${media.tablet} {
        width: 90%;
        gap: 40px;
    }

    @media (max-width: 850px) {
        flex-direction: column;
    }

    .about__container {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 725px) {
            width: 85%;
        }

        @media ${media.mobile} {
            width: 90%;
        }
    }

    .about__img {
        height: fit-content;
        aspect-ratio: 4/3;
        width: 400px;

        @media ${media.tablet} {
            width: 300px;
        }

        @media (max-width: 725px) {
            width: 85%;
        }

        @media ${media.mobile} {
            width: 90%;
        }
    }

    .about__heading,
    .about__description {
        color: ${colors.neutral100};
    }
`;

const About = () => {
    return (
        <AboutCont id="about">
            <img
                src="https://picsum.photos/400/300"
                alt=""
                className="about__img"
            />
            <div className="about__container">
                <h3 className="about__heading">About</h3>
                <p className="about__description">
                    I am an experienced web developer skilled in frontend
                    development and equipped with full-stack abilities. I
                    currently work at a dynamic marketing agency, collaborating
                    with cross-functional teams to build engaging websites and
                    web applications. With a strong foundation in web
                    development principles and industry-standard tools, I bring
                    a unique perspective to my work. I am proficient in creating
                    intuitive user interfaces and ensuring responsive design
                    across devices. While my current role focuses on frontend
                    development, I am well-versed in backend technologies and
                    have honed my full-stack skills through rigorous training. I
                    am committed to delivering exceptional projects, meeting
                    deadlines, and adapting to evolving needs.
                </p>
            </div>
        </AboutCont>
    );
};

export default About;
