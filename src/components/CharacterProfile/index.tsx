import * as Styled from "./styles";

type Props = {
    characterIcon: string;
};

export const CharacterProfile = ({ characterIcon }: Props) => {
    return (
        <Styled.Container>
            <Styled.Icon src={`/assets/characters/${characterIcon}`} />
        </Styled.Container>
    );
};
