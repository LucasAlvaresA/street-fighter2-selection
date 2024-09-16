import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export const ProfileArea = styled.div`
    margin-right: 10px;

    @media screen and (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80vw;
        gap: 20px;
    }
`;

export const CharacterCountry = styled.img`
    display: none;
    width: 80px;
    height: 80px;

    @media screen and (max-width: 500px) {
        display: block;
    }
`;

export const GridCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    margin-top: 5px;

    @media screen and (max-width: 320px) {
        gap: 1px;
    }
`;
