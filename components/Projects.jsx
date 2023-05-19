import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectCard from "../subComponents/ProjectCard";
import { colors } from "../styles/variables";

gsap.registerPlugin(ScrollTrigger);

const ProjectCont = styled.section`
    display: flex;
    flex-direction: column;

    .project__title {
        color: ${colors.neutral100};
        text-align: center;
    }

    .project__container {
        height: 100vh;
        /* height: 100%; */
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .project__row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 100px;
        margin: 0 100px;
    }
`;

const Projects = ({ title, id }) => {
    const container = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

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
                },
            });
        }, container);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <ProjectCont ref={container} id="projects">
            <h3 className="project__title">{title}</h3>
            <div className="project__container">
                <div className="project__row">
                    <ProjectCard id={"card-1"} />
                    <ProjectCard id={"card-2"} />
                    <ProjectCard id={"card-3"} />
                    <ProjectCard id={"card-4"} />
                    <ProjectCard id={"card-5"} />
                    {/* <ProjectCard id={"card-6"} />
                    <ProjectCard id={"card-7"} />
                    <ProjectCard id={"card-8"} /> */}
                </div>
            </div>
        </ProjectCont>
    );
};

export default Projects;
