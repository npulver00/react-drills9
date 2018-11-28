import React from 'react'

export default function Login(props){
  return(
      <div>
          <input className="username" placeholder="username" onChange={e=>props.alertUser(e.target.value)}/>
          <input className="password" placeholder="password" onChange={e=>props.alertPassword(e.target.value)}/>
          <button className="login-button" onClick={()=>props.alertLogin()}>Login</button>
      </div>
  )
}