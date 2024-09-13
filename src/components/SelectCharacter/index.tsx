import * as Styled from "./styles";
import { characters as initialCharacters } from "../../data/characters";
import { CharacterGrid } from "../CharacterGrid";
import { CharacterProfile } from "../CharacterProfile";
import { useState } from "react";
import { Character } from "../../types/character";

export const SelectCharacter = () => {
    const [characters, setCharacters] =
        useState<Character[]>(initialCharacters);
    const [selectedCharacter, setSelectedCharacter] = useState<Character>(
        characters[0]
    );

    const handleCharacterClick = (clickedCharacter: Character) => {
        setSelectedCharacter(clickedCharacter);

        setCharacters((prevCharacters) =>
            prevCharacters.map((character) =>
                character.id === clickedCharacter.id
                    ? { ...character, selected: true }
                    : { ...character, selected: false }
            )
        );
    };

    return (
        <Styled.Container>
            <Styled.ProfileArea>
                <CharacterProfile characterIcon={selectedCharacter.picture} />
            </Styled.ProfileArea>
            <Styled.GridCharacters>
                {characters.map((item, index) => {
                    return (
                        <CharacterGrid
                            key={index}
                            characterIcon={item.gridPicture}
                            selected={item.selected}
                            onClick={() => handleCharacterClick(item)}
                        />
                    );
                })}
            </Styled.GridCharacters>
        </Styled.Container>
    );
};
