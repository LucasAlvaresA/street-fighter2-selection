import * as Styled from "./styles";
import { useState } from "react";
import { Map } from "../Map";
import { SelectCharacter } from "../SelectCharacter";
import { Character } from "../../types/character";
import { characters as initialCharacters } from "../../data/characters";

export const SelectScreen = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<Character>(
        initialCharacters[0]
    );

    const handleCharacterSelection = (character: Character) => {
        setSelectedCharacter(character);
    };

    const iconPosition = {
        top: selectedCharacter.iconPosition.top,
        left: selectedCharacter.iconPosition.left,
        width: selectedCharacter.iconPosition.width,
        height: selectedCharacter.iconPosition.height,
    };

    return (
        <Styled.Container>
            <Map
                country={selectedCharacter.country}
                iconPosition={iconPosition}
            />
            <SelectCharacter onCharacterSelect={handleCharacterSelection} />
        </Styled.Container>
    );
};
