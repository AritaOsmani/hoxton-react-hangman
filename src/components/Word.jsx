import React from 'react';

export default function Word({ word, rightGuesses, lost, notGuessedLetters }) {
    return <div className='word-container'>
        {word.split('').map(char => <span>{rightGuesses.includes(char) ? char :

            lost ? <span className='not-guessed'>{char}</span> : ' _ '}</span>)}

    </div>;
}
