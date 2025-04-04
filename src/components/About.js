import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
export default function About() {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <h1>This is About {a.state.name} and class is {a.state.class}</h1>
    </div>
  )
}
