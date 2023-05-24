import { css } from "styled-components";
export const colors = {
    neutral100: "#e7e8ea",
    neutral200: "#cfd1d4",
    neutral300: "#b7b9bf",
    neutral400: "#9fa2aa",
    neutral500: "#878b95",
    neutral600: "#6f747f",
    neutral700: "#575d6a",
    neutral800: "#3f4555",
    neutral900: "#272e3f",
    neutral1000: "#0f172a",

    blue100: "#667db9",
    blue200: "#3352a1",
    blue300: "#00278a",
    blue400: "#00237c",
    blue500: "#001753",
};

export const fonts = {
    archivo: "Archivo, sans-serif",
    archivoBlack: "Archivo Black, sans-serif",
    judson: "Judson, serif",
};

export const media = {
    desktop: "(min-width: 1101px)",
    tablet: "(max-width: 1100px)",
    mobile: "(max-width: 500px)",
};

export const underlineAni = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;

    &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: ${colors.neutral100};
        position: absolute;
        bottom: -2px;
        transition: width 0.3s;
    }

    &:hover {
        cursor: pointer;
        &::after {
            width: 100%;
        }
    }
`;
