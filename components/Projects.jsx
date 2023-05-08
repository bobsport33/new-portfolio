import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectCard from "../subComponents/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ProjectCont = styled.section`
    /* height: 5000px; */
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
        mm.add(
            { isDesktop: "(min-width: 800px)", isMobile: "(max-width: 500px)" },
            (context) => {
                let { isDesktop, isMobile } = context.conditions;

                const ctx = gsap.context((self) => {
                    const row = self.selector(".project__row");
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: row,
                            start: "top top",
                            end: "+=500",
                            scrub: 1,
                            pin: row,
                        },
                    });
                    tl.fromTo(row, { scale: 3 }, { scale: 1 }).fromTo(
                        row,
                        { x: 0 },
                        {
                            x: () => -innerWidth,
                        }
                    );
                }, container);
            }
        );
    }, []);

    return (
        <ProjectCont ref={container}>
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
        </ProjectCont>
    );
};

export default Projects;
