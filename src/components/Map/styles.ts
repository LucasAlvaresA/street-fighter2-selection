import styled from "styled-components";
import map from "/assets/map.png";

export const Container = styled.div`
    width: 480px;
    height: 250px;
    background-image: url(${map});
    background-size: cover;
    background-position: center;
    position: relative;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const Icon = styled.img`
    border-radius: 5px;
    position: absolute;
    background-color: transparent;
`;
