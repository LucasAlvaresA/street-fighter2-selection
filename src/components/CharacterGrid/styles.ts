import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 90px;
`;

interface CharacterIconProps {
    selected: boolean;
}

export const CharacterIcon = styled.img<CharacterIconProps>`
    width: 50px;
    height: 80px;

    ${({ selected }) =>
        selected &&
        `
            border: 2.5px solid #47A8DB
        `}
`;
