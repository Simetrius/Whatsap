import React from "react"
import { ChatScreen } from "./Screens"
import { Route, Routes } from "react-router-dom"
import { Contacts } from "./Components/Contact/Contacts/Contacts"
import { Login } from "./Components/Login/Login/Login"


function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Login/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/chat/:chatId" element={<ChatScreen/>}/>
      </Routes>
    </>
  )
}

export default App
