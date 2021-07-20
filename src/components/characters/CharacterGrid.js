import React from 'react'
import CharacterItem from "./CharacterItem"





const CharacterGrid = ({chars}) => {

    if(chars) {
        return  (
            <section className="cards">
                {chars.map((char) => (
                    <CharacterItem key={char.id} char={char}></CharacterItem>
                 ))}
            </section>
        ) 
    }
    else {
        return (
            <section className="char-not-found">
                Character is not on the list!
            </section>
        )
    }
    
}

export default CharacterGrid
