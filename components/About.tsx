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

    @media (max-width: 725px) {
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </AboutCont>
    );
};

export default About;
