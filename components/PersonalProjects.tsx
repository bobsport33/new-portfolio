import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProjectCard from "../subComponents/ProjectCard";
import { colors, media } from "../styles/variables";

gsap.registerPlugin(ScrollTrigger);

const PersonalProjectCont = styled.section`
    display: flex;
    flex-direction: column;
    height: 5300px;

    @media ${media.tablet} {
        height: 4100px;
    }

    @media ${media.mobile} {
        height: 3200px;
    }

    .project__title {
        color: ${colors.neutral100};
        text-align: center;
        margin-bottom: 50px;
    }

    .project__container {
        height: 80vh;
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .project__row {
        display: flex;
        flex-direction: row-reverse;
        gap: 100px;
        margin: 0 100px;

        @media ${media.tablet} {
            gap: 50px;
            margin: 0 50px;
        }
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

const PersonalProjects = ({ projects }: Data) => {
    const container = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const ctx = gsap.context((self: gsap.Context) => {
            if (!self.selector) {
                return;
            }
            const box2 = self.selector(".project__container");
            const row2 = self.selector(".project__row");
            let rowWidth2 = row2[0].offsetWidth;

            // gsap.to(row, {
            //     startAt: { x: "-100%" },
            // });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box2,
                    start: "top 10%",
                    end: `+=${rowWidth2}`,
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true,
                },
            });

            tl.fromTo(
                box2,
                { xPercent: -100, x: () => innerWidth },
                {
                    xPercent: 0,
                    x: () => 0,
                }
            );
        }, container);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <PersonalProjectCont ref={container} id="personal-projects">
            <h3 className="project__title">Title</h3>
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
                            description:
                                "This is a description based off the image and title above. This will be adjusted for each card.",
                        }}
                    />
                </div>
            </div>
        </PersonalProjectCont>
    );
};

export default PersonalProjects;
