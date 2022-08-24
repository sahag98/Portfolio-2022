import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/sahak-arzoumanian/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/sahag.arzoumanian/">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/sahag98/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia