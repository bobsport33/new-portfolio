import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const FooterCont = styled.section`
    margin-top: 5000px;
    height: 500px;
    background-color: ${colors.neutral500};
`;

const Footer = () => {
    return <FooterCont></FooterCont>;
};

export default Footer;
