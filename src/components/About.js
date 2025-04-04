import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
export default function About() {
  const a = useContext(noteContext)
  console.log(a)
  return (
    <div>
      <h1>This is About {a.name}</h1>
    </div>
  )
}
