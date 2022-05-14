import React from 'react'
import './Home.css'
import Action from '../../Components/Action/Action'


export default function Home() {
  return (
    <>
      <h1 className='home-title'>Nos actions</h1>
      <div className="container-actions">
        <Action>
          <h2>hello Actions</h2>
        </Action>
      </div>
    </>
  )
}
