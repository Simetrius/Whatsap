import React from "react"
import { ChatScreen } from "./Screens"
import { Route, Routes } from "react-router-dom"
import { Contacts } from "./Components/Contact/Contacts"




function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Contacts/>}/>
        <Route path="/chat/:chatId" element={<ChatScreen/>}/>
      </Routes>
    </>
  )
}

export default App
