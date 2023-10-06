'use client'

import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState<string>('')

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  };

  const [todos, setTodos] = useState<string[]>([])

  const addTodos = () => {
    const newTodos = [...todos]
    newTodos.push(text)
    setTodos(newTodos)
    setText('')
  }

  return (
    <>
    <main>
      <div>
        <ul>
          {todos.map((v) => (
            <li key={v}>
            <p>{v}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input type='text' value={text} onChange={changeText}/>
        <button onClick={addTodos}>追加</button>
      </div>
    </main>
    </>
  );
}
