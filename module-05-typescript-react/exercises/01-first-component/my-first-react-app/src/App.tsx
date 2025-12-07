import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard name = "Alice" age= {20} bio= "student" avatarUrl= "https://i.pravatar.cc/150?img=1"/>
      
      <UserCard name = "Abby" age= {19} bio= "student" avatarUrl= "https://i.pravatar.cc/150?img=2"/>
      <UserCard name = "Melinda" age= {22} bio= "student" avatarUrl= "https://i.pravatar.cc/150?img=3"/>
    
    </>
  )
}

export default App
