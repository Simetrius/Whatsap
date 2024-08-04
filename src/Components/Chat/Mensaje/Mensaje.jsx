import React from "react"
import "./Mensaje.css"

const Mensaje = ({ mensaje }) => {
  const {author, text, day, hour, id} = mensaje
  
  return (
    <div className={validacionAutor(author)} key={id}>
      <div className="burbuja">
        <div className="author-name">
          <span className="author fonts">{author}</span>
        </div>
        <div className="message-box">
          <span className="messageText fonts">{text}</span>
        </div>
        <div className="date-hour-state">
          <div className="date-hour">
            <span className="date fonts">{day}</span>
            <span className="hour fonts">{hour}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const validacionAutor = (autor) => {
  if(autor == "yo"){
      return "yo"
  }
  else{
      return "otro"
  }
}


export { Mensaje }