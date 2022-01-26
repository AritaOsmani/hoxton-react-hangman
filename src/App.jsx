import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import Span from './components/Span'
import Title from './components/Title'
import Word from './components/Word'
import words from './words'

function App() {
  const [word, setWord] = useState(getRandomWord())
  const [guesses, setGuesses] = useState([])


  const letters = generateLetters()

  const rightGuesses = guesses.filter(guess => word.includes(guess))
  const wrongGuesses = guesses.filter(guess => !word.includes(guess))

  const notGuessedLetters = word.split('').filter(char => !rightGuesses.includes(char))


  const lives = 6 - wrongGuesses.length
  const lost = lives === 0;
  const won = word.split('').every(char => guesses.includes(char))

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
  }
  function generateLetters() {
    const letters = [];
    for (let i = 97; i <= 122; i++) {
      letters.push(String.fromCharCode(i))
    }
    return letters;
  }

  function reset() {
    setGuesses([])
    setWord(getRandomWord())
  }

  console.log('Word:', word)


  useEffect(() => {
    if (lost || won) return
    function handleListener(e) {

      if (letters.includes(e.key))
        setGuesses(guesses => {
          if (guesses.includes(e.key)) return guesses
          return [...guesses, e.key.toLowerCase()]
        })
    }
    document.addEventListener('keydown', handleListener)
    return () => document.removeEventListener('keydown', handleListener)
  }, [lost, guesses, won])

  return (

    <div className="App">
      <div className='info-container'>
        {lost && <Title className='lost'>You Lost!</Title>}
        {won && <Title className='won'>You Won!</Title>}
        <Word word={word} rightGuesses={rightGuesses} lost={lost} notGuessedLetters={notGuessedLetters} />
        <Span className='wrong-guesses'>{`Wrong guesses: ${wrongGuesses}`}</Span>
        <Span className='lives'>{`Lives: ${lives}`}</Span>
        {(lost || won) && <Button className='reset-btn' content='Reset' onClick={reset} />}
      </div>

    </div>
  )
}

export default App
