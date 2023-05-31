import React from "react";
import styled from "styled-components";
import { colors, fonts, media } from "../styles/variables";

const FooterCont = styled.section`
    background-color: ${colors.neutral800};
    display: flex;
    flex-direction: column;
    justify-content: center;

    .info__container {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .info__heading {
        color: ${colors.neutral100};
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
        padding: 10px;
    }
`;

const Footer = () => {
    const year = new Date().getFullYear().toString();

    return (
        <FooterCont>
            <div className="info__container">
                <h5 className="info__heading">Contact</h5>
                <p className="info">
                    Phone:{" "}
                    <a href="tel:+18473456751" className="info__link">
                        847-345-6751
                    </a>
                </p>
                <p className="info">
                    Email:{" "}
                    <a
                        href="mailto:bob62kelly@gmail.com"
                        className="info__link"
                    >
                        bob62kelly@gmail.com
                    </a>
                </p>
            </div>
            <div className="copyright">
                <p className="copyright__text">Copyright©{year} Bob Kelly</p>
            </div>
        </FooterCont>
    );
};

export default Footer;
