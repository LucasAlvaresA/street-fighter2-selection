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
    border: 2.5px solid transparent;
    &:hover {
        cursor: pointer;
    }

    ${({ selected }) =>
        selected &&
        `
            border-color: #47a8db
        `};
`;
