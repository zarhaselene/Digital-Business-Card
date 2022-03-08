import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
import '../styles/Footer.css'


export default function Footer() {
  return (
    <footer>
        <div className="icons">
            <a href="https://twitter.com/whoisselene_" target="_blank" rel="noopener noreferrer">{<FaTwitterSquare className="twitter" />}</a>
            <a href="https://www.facebook.com/ZarhaBuske" target="_blank" rel="noopener noreferrer">{<FaFacebookSquare className="facebook" />}</a>
            <a href="https://instagram.com/whoisselene" target="_blank" rel="noopener noreferrer">{<FaInstagramSquare className="instagram" />}</a>
            <a href="https://github.com/zarhaselene" target="_blank" rel="noopener noreferrer">{<FaGithubSquare className="github" />}</a>
        </div>
    </footer>
  )
}