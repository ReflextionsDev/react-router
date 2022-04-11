import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Form() {
  let navigate = useNavigate()
  let params = useParams()

  return (
    <div>
      <h1>Contact Form</h1>
      <div className="field">
        <label>Name: </label>
        <input />
      </div>
      <div className="field">
        <label>Phone: </label>
        <input />
      </div>
      <div className="field">
        <label>Age: </label>
        <input type='number' />
      </div>
      <div className="field">
        <label>Email: </label>
        <input />
      </div>
      <button onClick={() => { navigate('submitted') }}>Submit</button>

      <div>{params.id}</div>
    </div>
  )
}
