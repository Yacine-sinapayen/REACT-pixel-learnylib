import React from 'react'
import './User.css'

export default function User({id,email,name}) {
  return (
    <div className='list'>
      <span>{name}</span>
      <span>{email}</span>
      <span>
        <button>edit</button>
        <button>delete</button>
      </span>
    </div>
  )
}
