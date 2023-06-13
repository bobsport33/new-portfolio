import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { colors } from "../styles/variables";

import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const HeroCont = styled.section`
    width: 100%;
    overflow-x: hidden;

    .container {
        height: calc(100vh + 15000px);
        width: 100%;
    }

    .heading-container {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .heading,
    .hero__text {
        color: ${colors.neutral100};

        text-align: center;
        width: 100%;

        @media (max-width: 800px) {
            font-size: 2.4rem;
        }

        @media (max-width: 500px) {
            font-size: 2rem;
        }
    }

    .text-container {
        position: fixed;
        top: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transform: translateY(30%);
    }

    .hero__span {
        opacity: 0;

        &--1 {
            opacity: 1;
        }
    }
`;

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    const container = useRef(null);

    useLayoutEffect(() => {
        mm.add(
            { isDesktop: "(min-width: 800px)", isMobile: "(max-width: 800px)" },
            (context) => {
                let { isDesktop, isMobile } = context.conditions!;

                const ctx = gsap.context((self: any) => {
                    const container = self.selector(".container");
                    const text1 = self.selector(".heading");
                    const name1 = self.selector(".heading--span");
                    const text1Other = self.selector(".heading--text");
                    const textCont2 = self.selector(".text-container--2");
                    const textCont3 = self.selector(".text-container--3");
                    const textCont4 = self.selector(".text-container--4");

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            start: "top top",
                            end: "+=15000",
                            scrub: 1,
                        },
                    });

                    tl.fromTo(text1, { scale: isMobile ? 2 : 3 }, { scale: 1 })
                        .to(text1Other, {
                            opacity: 0,
                        })
                        .to(text1, {
                            x: isDesktop ? -230 : isMobile ? -125 : -150,
                        })
                        .fromTo(
                            textCont2,
                            { y: "30%", opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                            }
                        )
                        .to(textCont2, { y: "-30%", opacity: 0 })
                        .to(text1, {
                            x: isDesktop ? -110 : isMobile ? -61 : -73,
                        })
                        .fromTo(
                            textCont3,
                            { y: "30%", opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                            }
                        )
                        .to(textCont3, { y: "-30%", opacity: 0 })
                        .to(text1, {
                            x: isDesktop ? -110 : isMobile ? -61 : -73,
                        })
                        .fromTo(
                            textCont4,
                            { y: "30%", opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                            }
                        )
                        .to(textCont4, { y: "-30%", opacity: 0 })
                        .to(name1, { opacity: 0 });
                }, container);

                return () => ctx.revert();
            }
        );
    }, []);

    return (
        <HeroCont ref={container}>
            <div className="container">
                <div className="heading-container">
                    <h1 className={"heading"}>
                        <span className={"heading--text"}>this is some </span>
                        <span className={"heading--span"}>text</span>
                        <span className={"heading--text"}>.</span>
                    </h1>
                </div>
                <div className="text-container text-container--2">
                    <h2 className={"hero__text hero__text--2"}>
                        <span className={"hero__span"}>text</span> about
                        something.
                    </h2>
                </div>
                <div className="text-container text-container--3">
                    <h2 className={"hero__text hero__text--3"}>
                        some different<span className={"hero__span"}>text</span>{" "}
                        about something.
                    </h2>
                </div>
                <div className="text-container text-container--4">
                    <h2 className={"hero__text hero__text--4"}>
                        some different<span className={"hero__span"}>text</span>{" "}
                        about something.
                    </h2>
                </div>
            </div>
        </HeroCont>
    );
};

export default Hero;
