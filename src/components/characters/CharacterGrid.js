import React from 'react'
import CharacterItem from "./CharacterItem"

const CharacterGrid = ({chars}) => {
    
    return  (
        <section className="cards">
            {chars.map((char) => (
                <CharacterItem key={char.id} char={char}></CharacterItem>
             ))}
        </section>
    ) 
}

export default CharacterGrid
