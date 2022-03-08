import React from 'react'
import Image from '../images/profile.jpg'
import '../styles/Header.css'


export default function Header() {
  return (
    <header>
      <img src={Image} alt="" />
      <div className="header-info">
        <h1>Zarha Buske</h1>
        <h4>Frontend Developer</h4>
        <h6>website coming soon</h6>
      </div>
    </header>
  )
}
