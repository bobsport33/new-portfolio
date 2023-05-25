import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const ProjectCardCont = styled.a`
    border-radius: 30px;
    /* background: linear-gradient(45deg, ${colors.blue300}, ${colors.blue200}); */
    background: linear-gradient(45deg, ${colors.blue200}, ${colors.neutral700});
    box-shadow: 0 3px 10px rgb(63, 69, 85, 0.4);
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 30px;
    transition: transform 0.1s ease;
    &:hover {
        cursor: pointer;
    }

    .card__title {
        color: ${colors.neutral200};
        pointer-events: none;
    }

    .card__description {
        color: ${colors.neutral200};
        pointer-events: none;
    }

    .card__image {
        height: 300px;
        width: 400px;
        pointer-events: none;
        /* pointer-events: none; */
    }
`;

interface Data {
    data: {
        id: string;
        name: string;
        url: string;
        image: string;
    };
}

const ProjectCard = ({ data }: Data) => {
    function throttle<T, U>(func: T, delay: U) {
        let timeoutId;
        let isThrottled = false;

        return function (...args) {
            if (!isThrottled) {
                func.apply(this, args);
                isThrottled = true;

                timeoutId = setTimeout(() => {
                    isThrottled = false;
                }, delay);
            }
        };
    }

    const tiltHandler = (e) => {
        const element = e.target;
        const rect = element.getBoundingClientRect();

        // Calculate the position of the mouse relative to the element
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate the center of the element
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate the angle of rotation based on the mouse position
        const angleX = (mouseY - centerY) * -0.05;
        const angleY = (mouseX - centerX) * 0.05;

        // Apply the rotation to the element
        element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };

    const removeTilt = (event) => {
        const element = event.target;

        // Add transition effect to ease the tilt back
        element.style.transition = "transform 0.5s ease";

        // Remove the tilt effect by resetting the transform
        element.style.transform = "";

        // Reset transition after a short delay
        setTimeout(function () {
            element.style.transition = "transform 0.1s ease";
        }, 500);
    };

    const throttledTiltElement = throttle(tiltHandler, 20); // Adjust the delay value as desired
    const throttledRemoveTilt = throttle(removeTilt, 20); // Adjust the delay value as desired

    return (
        <ProjectCardCont
            href="#"
            onMouseMove={throttledTiltElement}
            onMouseOut={throttledRemoveTilt}
        >
            <img
                src="https://picsum.photos/400/300"
                alt="TEXT"
                className="card__image"
            />
            <h4 className="card__title">{data.title}</h4>
            <p className="card__description">
                This is a description based off the image and title above. This
                will be adjusted for each card.
            </p>
        </ProjectCardCont>
    );
};

export default ProjectCard;
