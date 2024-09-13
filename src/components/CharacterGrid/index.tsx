import * as Styled from "./styles";

type Props = {
    characterIcon: string;
    selected: boolean;
};

export const CharacterGrid = ({ characterIcon, selected }: Props) => {
    return (
        <Styled.Container>
            <Styled.CharacterIcon
                src={`/assets/characters/${characterIcon}`}
                alt="Character Icon"
                selected={selected}
            />
        </Styled.Container>
    );
};
