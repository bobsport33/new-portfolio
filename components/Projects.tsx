import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectCard from "../subComponents/ProjectCard";
import { colors, media } from "../styles/variables";

gsap.registerPlugin(ScrollTrigger);

const ProjectCont = styled.section`
    display: flex;
    flex-direction: column;
    height: 5000px;

    @media ${media.tablet} {
        height: 3800px;
    }

    @media ${media.mobile} {
        height: 3100px;
    }

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

        @media ${media.tablet} {
            gap: 50px;
            margin: 0 50px;
        }
    }
`;

interface Project {
    id: string;
    title: string;
    url: string;
    image: string;
    alt: string;
    description: string;
}

interface Data {
    projects: Project[];
}

const Projects = ({ projects }: Data) => {

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
                        data={{
                            id: "1",
                            title: "this is a title",
                            url: "#",
                            image: "https://picsum.photos/400/300",
                            alt: "",
                            skills: ["javscript", "react"],
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />{" "}
                    <ProjectCard
                        data={{
                            id: "1",
                            title: "this is a title",
                            url: "#",
                            image: "https://picsum.photos/400/300",
                            alt: "",
                            skills: ["javscript", "react"],
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />{" "}
                    <ProjectCard
                        data={{
                            id: "1",
                            title: "this is a title",
                            url: "#",
                            image: "https://picsum.photos/400/300",
                            alt: "",
                            skills: ["javscript", "react"],
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />{" "}
                    <ProjectCard
                        data={{
                            id: "1",
                            title: "this is a title",
                            url: "#",
                            image: "https://picsum.photos/400/300",
                            alt: "",
                            skills: ["javscript", "react"],
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />{" "}
                    <ProjectCard
                        data={{
                            id: "1",
                            title: "this is a title",
                            url: "#",
                            image: "https://picsum.photos/400/300",
                            alt: "",
                            skills: ["javscript", "react"],
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />{" "}
                    <ProjectCard
                        data={{
                            id: "1",
                            title: "this is a title",
                            url: "#",
                            image: "https://picsum.photos/400/300",
                            alt: "",
                            skills: ["javscript", "react"],
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />{" "}
                    <ProjectCard
                        data={{
                            id: "1",
                            title: "this is a title",
                            url: "#",
                            image: "https://picsum.photos/400/300",
                            alt: "",
                            skills: ["javscript", "react"],
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />
                </div>
            </div>
        </ProjectCont>
    );
};

export default Projects;
