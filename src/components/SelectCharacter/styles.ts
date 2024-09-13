import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileArea = styled.div`
    margin-right: 10px;
`;

export const GridCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    margin-top: 5px;
`;
