import * as Styled from "./styles";

type Props = {
    characterIcon: string;
    selected: boolean;
    onClick: () => void;
};

export const CharacterGrid = ({ characterIcon, selected, onClick }: Props) => {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.CharacterIcon
                src={`/assets/characters/${characterIcon}`}
                alt="Character Icon"
                selected={selected}
            />
        </Styled.Container>
    );
};
