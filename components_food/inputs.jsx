import React, { useState } from "react"
import "./inputs.css"

function Input({ n, placeholder, message, type, up }) {
  const [text, setText] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  return (
    <div className="inputBox">
      <div className="topMessage">{up}</div>
      <div className="Box">
        <input
          size="50"
          type={type}
          name={n}
          placeholder={placeholder}
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            if (e.target.value === "") setErrorMessage(message)
            else setErrorMessage("")
          }}
        />
      </div>
      <div className="message">{errorMessage}</div>
    </div>
  )
}

export default Input
