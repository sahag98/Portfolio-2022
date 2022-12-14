import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {

    if (name.length && email.length && message.length) {
      setLoading(true)
      const contact = {
        _type: 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }

      client.create(contact)
        .then(() => {
          setLoading(false)
          setIsFormSubmitted(true)
        })
        .catch((err) => console.log(err))
    }

    else {
      console.log("please fill out the form.")
    }

  }
  return (
    <>
      <h2 className="head-text">Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" loading='lazy' />
          <a href="mailto:arzsahag@gmail.com" className='p-text'>arzsahag@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" loading='lazy' />
          <a href="tel:+1 (661) 300-0021" className='p-text'>+1 (661) 300-0021</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex">
          <div className="app__flex">
            <input className='p-text' type="text" placeholder='Your name' name='name' value={name} onChange={handleChangeInput} required />
          </div>
          <div className="app__flex">
            <input className='p-text' type="email" placeholder='Your email' name='email' value={email} onChange={handleChangeInput} required pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}' />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)