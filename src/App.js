import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'

function App() {
  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <>
      <div className="header">
        <h1>Piano Intervals Flash Cards</h1>
      </div>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;

const SAMPLE_FLASHCARDS = [
  {answer: 'B', id: 1, question: 'What is the 2nd interval from A?'},
  {answer: 'B', id: 2, question: 'What is the 2nd interval from Ab?'},
  {answer: 'C#', id: 3, question: 'What is the 2nd interval from B?'},
  {answer: 'C', id: 4, question: 'What is the 2nd interval from Bb?'},
  {answer: 'D', id: 5, question: 'What is the 2nd interval from C?'},
  {answer: 'D#', id: 6, question: 'What is the 2nd interval from  C#?'},
  {answer: 'E', id: 7, question: 'What is the 2nd interval from D?'},
  {answer: 'Eb', id: 8, question: 'What is the 2nd interval from Db?'},
  {answer: 'F#', id: 9, question: 'What is the 2nd interval from E?'},
  {answer: 'F', id: 10, question: 'What is the 2nd interval from Eb?'},
  {answer: 'G', id: 11, question: 'What is the 2nd interval from F?'},
  {answer: 'G#', id: 12, question: 'What is the 2nd interval from  F#?'},
  {answer: 'A', id: 13, question: 'What is the 2nd interval from  G?'},
  {answer: 'Ab', id: 14, question: 'What is the 2nd interval from Gb?'},
  {answer: 'C#', id: 15, question: 'What is the 3rd interval from A?'},
  {answer: 'C', id: 16, question: 'What is the 3rd interval from Ab?'},
  {answer: 'D#', id: 17, question: 'What is the 3rd interval from B?'},
  {answer: 'D', id: 18, question: 'What is the 3rd interval from Bb?'},
  {answer: 'E', id: 19, question: 'What is the 3rd interval from C?'},
  {answer: 'E#', id: 20, question: 'What is the 3rd interval from  C#?'},
  {answer: 'F#', id: 21, question: 'What is the 3rd interval from  D?'},
  {answer: 'F', id: 22, question: 'What is the 3rd interval from Db?'},
  {answer: 'G#', id: 23, question: 'What is the 3rd interval from E?'},
  {answer: 'G', id: 24, question: 'What is the 3rd interval from Eb?'},
  {answer: 'A', id: 25, question: 'What is the 3rd interval from F?'},
  {answer: 'A#', id: 26, question: 'What is the 3rd interval from F#?'},
  {answer: 'B', id: 27, question: 'What is the 3rd interval from G?'},
  {answer: 'Bb', id: 28, question: 'What is the 3rd interval from Gb?'},
  {answer: 'D', id: 29, question: 'What is the 4th interval from A?'},
  {answer: 'Db', id: 30, question: 'What is the 4th interval from Ab?'},
  {answer: 'E', id: 31, question: 'What is the 4th interval from B?'},
  {answer: 'Eb', id: 32, question: 'What is the 4th interval from Bb?'},
  {answer: 'F', id: 33, question: 'What is the 4th interval from C?'},
  {answer: 'F#', id: 34, question: 'What is the 4th interval from C#?'},
  {answer: 'G', id: 35, question: 'What is the 4th interval from  D?'},
  {answer: 'Gb', id: 36, question: 'What is the 4th interval from Db?'},
  {answer: 'A', id: 37, question: 'What is the 4th interval from E?'},
  {answer: 'Ab', id: 38, question: 'What is the 4th interval from Eb?'},
  {answer: 'Bb', id: 39, question: 'What is the 4th interval from F?'},
  {answer: 'B', id: 40, question: 'What is the 4th interval from F#?'},
  {answer: 'C', id: 41, question: 'What is the 4th interval from G?'},
  {answer: 'Cb', id: 42, question: 'What is the 4th interval from Gb?'},
  {answer: 'E', id: 43, question: 'What is the 5th interval from A?'},
  {answer: 'Eb', id: 44, question: 'What is the 5th interval from Ab?'},
  {answer: 'F#', id: 45, question: 'What is the 5th interval from B?'},
  {answer: 'F', id: 46, question: 'What is the 5th interval from Bb?'},
  {answer: 'G', id: 47, question: 'What is the 5th interval from C?'},
  {answer: 'G#', id: 48, question: 'What is the 5th interval from C#?'},
  {answer: 'A', id: 49, question: 'What is the 5th interval from  D?'},
  {answer: 'Ab', id: 50, question: 'What is the 5th interval from Db?'},
  {answer: 'B', id: 51, question: 'What is the 5th interval from E?'},
  {answer: 'Bb', id: 52, question: 'What is the 5th interval from Eb?'},
  {answer: 'C', id: 53, question: 'What is the 5th interval from F?'},
  {answer: 'C#', id: 54, question: 'What is the 5th interval from F#?'},
  {answer: 'D', id: 55, question: 'What is the 5th interval from G?'},
  {answer: 'Db', id: 56, question: 'What is the 5th interval from Gb?'},
  {answer: 'F#', id: 57, question: 'What is the 6th interval from A?'},
  {answer: 'F', id: 58, question: 'What is the 6th interval from Ab?'},
  {answer: 'G#', id: 59, question: 'What is the 6th interval from B?'},
  {answer: 'G', id: 60, question: 'What is the 6th interval from Bb?'},
  {answer: 'A', id: 61, question: 'What is the 6th interval from C?'},
  {answer: 'A#', id: 62, question: 'What is the 6th interval from C#?'},
  {answer: 'B', id: 63, question: 'What is the 6th interval from  D?'},
  {answer: 'Bb', id: 64, question: 'What is the 6th interval from Db?'},
  {answer: 'C#', id: 65, question: 'What is the 6th interval from E?'},
  {answer: 'C', id: 66, question: 'What is the 6th interval from Eb?'},
  {answer: 'D', id: 67, question: 'What is the 6th interval from F?'},
  {answer: 'D#', id: 68, question: 'What is the 6th interval from F#?'},
  {answer: 'E', id: 69, question: 'What is the 6th interval from G?'},
  {answer: 'Eb', id: 70, question: 'What is the 6th interval from Gb?'},
  {answer: 'G#', id: 71, question: 'What is the 7th interval from A?'},
  {answer: 'G', id: 72, question: 'What is the 7th interval from Ab?'},
  {answer: 'A#', id: 73, question: 'What is the 7th interval from B?'},
  {answer: 'A', id: 74, question: 'What is the 7th interval from Bb?'},
  {answer: 'B', id: 75, question: 'What is the 7th interval from C?'},
  {answer: 'B#', id: 76, question: 'What is the 7th interval from C#?'},
  {answer: 'C#', id: 77, question: 'What is the 7th interval from D?'},
  {answer: 'C', id: 78, question: 'What is the 7th interval from Db?'},
  {answer: 'D#', id: 79, question: 'What is the 7th interval from E?'},
  {answer: 'D', id: 80, question: 'What is the 7th interval from Eb?'},
  {answer: 'E', id: 81, question: 'What is the 7th interval from F?'},
  {answer: 'E#', id: 82, question: 'What is the 7th interval from F#?'},
  {answer: 'F#', id: 83, question: 'What is the 7th interval from G?'},
  {answer: 'F', id: 84, question: 'What is the 7th interval from Gb?'}
  ]