import React, { ReactEventHandler, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/variables";

const HeaderCont = styled.div`
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${({ open }) => {
        if (open) {
            return css`
                .header__menu {
                    height: 200px !important;
                }

                .header__link {
                    opacity: 1 !important;
                    height: 23px !important;
                    pointer-events: all !important;
                }
            `;
        }
    }}

    .header__btn {
        height: 50px;
        width: 50px;
        background-color: ${colors.neutral100};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
        }
    }
    .header__line {
        width: 30px;
        height: 2px;
        background-color: ${colors.neutral1000};

        &::before,
        &::after {
            content: "";
            width: 30px;
            height: 2px;
            background-color: ${colors.neutral1000};
            position: relative;
            display: block;
        }

        &::before {
            top: -6px;
        }

        &::after {
            top: 4px;
        }
    }

    .header__menu {
        background-color: ${colors.neutral100};
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        height: 0;
        width: 100px;
        transition: height 0.5s;
        z-index: 10;
    }

    .header__link {
        font-size: 2rem;
        opacity: 0;
        height: 0;
        transition: opacity 1s;
        z-index: 1;
        pointer-events: none;
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuClickHandler = (e: React.SyntheticEvent) => {
        setMenuOpen(!menuOpen);
    };

    const closeModalHandeler = () => {
        setMenuOpen(false);
    };
    return (
        <HeaderCont open={menuOpen}>
            <div
                className="header__btn"
                role="button"
                onClick={menuClickHandler}
            >
                <span className="header__line"></span>
            </div>

            <div className="header__menu">
                <a
                    href="#projects"
                    className="header__link"
                    onClick={closeModalHandeler}
                >
                    Projects
                </a>
                <a
                    href="#personal-projects"
                    className="header__link"
                    onClick={closeModalHandeler}
                >
                    Personal Projects
                </a>
                <a
                    href="#"
                    className="header__link"
                    onClick={closeModalHandeler}
                >
                    Link Text
                </a>
            </div>
        </HeaderCont>
    );
};

export default Header;
