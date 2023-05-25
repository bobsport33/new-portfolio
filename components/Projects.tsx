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
        margin-bottom: 50px;
    }

    .project__container {
        height: 80vh;
        /* height: 100%; */
        width: fit-content;
        display: flex;
        flex-direction: column;
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

interface Project {
    name: string;
    url: string;
    image: string;
}

interface Data {
    projects: Project[];
}

const Projects = ({ projects }: Data) => {
    console.log(projects);
    const container = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const ctx = gsap.context((self: gsap.Context) => {
            if (!self.selector) {
                return;
            }
            const box = self.selector(".project__container");
            const row = self.selector(".project__row");
            let rowWidth = row[0].offsetWidth;

            gsap.to(box, {
                xPercent: -100,
                x: () => innerWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: box,
                    start: "top 10%",
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
            <h3 className="project__title">Projects</h3>
            <div className="project__container">
                <div className="project__row">
                    {/* {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                data={project}
                                id={`project-${index}`}
                            />
                        );
                    })} */}
                    <ProjectCard
                        id={"card-1"}
                        data={{ title: "this is a title" }}
                    />
                    <ProjectCard
                        id={"card-2"}
                        data={{ title: "this is a title" }}
                    />
                    <ProjectCard
                        id={"card-3"}
                        data={{ title: "this is a title" }}
                    />
                    <ProjectCard
                        id={"card-4"}
                        data={{ title: "this is a title" }}
                    />
                    <ProjectCard
                        id={"card-5"}
                        data={{ title: "this is a title" }}
                    />
                    <ProjectCard
                        id={"card-5"}
                        data={{ title: "this is a title" }}
                    />
                    <ProjectCard
                        id={"card-5"}
                        data={{ title: "this is a title" }}
                    />
                    <ProjectCard
                        id={"card-5"}
                        data={{ title: "this is a title" }}
                    />
                </div>
            </div>
        </ProjectCont>
    );
};

export default Projects;
