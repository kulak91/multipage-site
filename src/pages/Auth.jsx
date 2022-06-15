import React from 'react'
import './auth.css'
import {Link} from 'react-router-dom'

export default function Auth() {
  return (
    <div className='auth'>
        <div className='auth_center'>Very Fancy auth page</div>
    <Link to="/"> Go to homepage</Link>
    </div>
  )
}
