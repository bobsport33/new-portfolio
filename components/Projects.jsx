import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectCard from "../subComponents/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ProjectCont = styled.section`
    /* height: 5000px; */

    display: flex;
    height: 100vh;

    .project__container {
        height: 100%;
        background-color: teal;
        width: fit-content;
        /* width: 100%; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .project__row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 80px;
    }
`;

const Projects = () => {
    const container = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const box = self.selector(".project__container");
            const row = self.selector(".project__row");
            let rowWidth = row[0].offsetWidth;

            gsap.to(box, {
                xPercent: -100,
                x: () => innerWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: box,
                    start: "top top",
                    end: `+=${rowWidth}`,
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true,
                    // anticipatePin: 1,
                    markers: true,
                },
            });
        }, container);

        return () => {
            ctx.revert(); // animation cleanup!!
        };
    }, []);

    return (
        <ProjectCont ref={container}>
            <div className="project__container">
                <div className="project__row">
                    <ProjectCard id={"card-1"} />
                    <ProjectCard id={"card-2"} />
                    <ProjectCard id={"card-3"} />
                    <ProjectCard id={"card-4"} />
                    <ProjectCard id={"card-5"} />
                    <ProjectCard id={"card-6"} />
                    <ProjectCard id={"card-7"} />
                    <ProjectCard id={"card-8"} />
                </div>
            </div>
        </ProjectCont>
    );
};

export default Projects;
