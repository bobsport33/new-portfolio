import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const ProjectCardCont = styled.div`
    display: flex;
    flex-direction: column;

    color: ${colors.neutral100};
`;

const ProjectCard = ({ data }) => {
    return (
        <ProjectCardCont>
            <img
                src="https://picsum.photos/300/300"
                alt="TEXT"
                className="project__image"
            />
            <h4 className="project__title">{data.title}</h4>
            <p className="project__description">
                This is a description based off the image and title above. This
                will be adjusted for each card.
            </p>
        </ProjectCardCont>
    );
};

export default ProjectCard;
