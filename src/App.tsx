import { CharacterGrid } from "./components/CharacterGrid";
import { GlobalStyle } from "./GlobalStyles";
import { CharacterProfile } from "./components/CharacterProfile";
import { characters } from "./data/characters";

function App() {
    return (
        <>
            <GlobalStyle />
            {characters.map((item, index) => {
                return (
                    <CharacterGrid
                        key={index}
                        characterIcon={item.gridPicture}
                        selected={item.selected}
                    />
                );
            })}
            <CharacterProfile characterIcon={characters[0].picture} />
        </>
    );
}

export default App;
