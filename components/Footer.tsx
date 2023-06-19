import React from "react";
import styled from "styled-components";
import { colors, fonts, media } from "../styles/variables";
import Github from "../public/svg/github-icon.svg";
import Linkedin from "../public/svg/linkedin-icon.svg";
import MailIcon from "../public/svg/mail-svgrepo-com.svg";

const FooterCont = styled.section`
    background-color: ${colors.neutral800};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    padding: 80px 15px;

    .info__container {
        padding: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 45px;
    }

    .info__heading {
        color: ${colors.neutral100};
        text-align: center;
    }

    .info {
        color: ${colors.neutral100};
        font-family: ${fonts.archivo};
        display: inline;
    }

    .info__link {
        font-family: ${fonts.archivo};
        color: ${colors.blue500};
        &:hover {
            cursor: pointer;
            color: ${colors.blue400};
        }
    }

    .copyright__text {
        font-family: ${fonts.archivo};
        color: ${colors.neutral400};
        text-align: center;
    }

    .icon {
        height: 60px;
        width: 60px;
        svg {
            transition: transform 0.3s;
        }

        &:hover {
            svg {
                transform: scale(1.1);
            }
        }
    }
`;

const Footer = () => {
    const year = new Date().getFullYear().toString();

    return (
        <FooterCont>
            <h3 className="info__heading">Let's Get in Touch</h3>

            <div className="info__container">
                <a
                    className="icon"
                    href="https://github.com/bobsport33"
                    target="_blank"
                >
                    <Github />
                </a>
                <a
                    className="icon"
                    href="https://github.com/bobsport33"
                    target="_blank"
                >
                    <Linkedin />
                </a>
                <a href="mailto:bob62kelly@gmail.com" className="icon">
                    <MailIcon />
                </a>
            </div>
            <div className="copyright">
                <p className="copyright__text">Copyright ©{year} Bob Kelly</p>
            </div>
        </FooterCont>
    );
};

export default Footer;
