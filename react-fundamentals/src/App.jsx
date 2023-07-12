import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Task:

// Create a component that displays a greeting message to the user.
// Include an input field where a user can enter their name.
// As soon as the user starts typing their name, the greeting message should dynamically update to include their name. For example, if the user types "John," the greeting should read "Hello, John!"
// To complete this task, you will likely use:

// useState for state management
// An onChange event handler to capture and react to user input

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Hello
      </h1>
    </>
  )
}

export default App
