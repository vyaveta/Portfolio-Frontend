import React,{useEffect, useState} from 'react'
import { images } from '@/constants'
import styles from './Footer.module.scss'
import { toast } from 'react-toastify'
import { client } from '@/client'
import {HiOutlineMail} from 'react-icons/hi'

import emailPic from '../../assets/email.png'
import Image from 'next/image'
import SocialMedia from '@/components/socialmedia/SocialMedia'
import NavigationDots from '@/components/NavigationDots/NavigationDots'

const EMAIL_REGEX =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const USER_REGEX = /^[a-zA-z][a-zA-Z ]{3,23}$/; // This regex is for the validation of users real name


const Footer = () => {

  interface contactType{
    _type: string,
    name: string,
    email: string,
    message: string,
  }

  const handleError = (msg: string ) => {
    try{
      toast.error(msg)
    }catch(e){
      toast.error('Oops Something went wrong!')
    }
  } 

  const handleChangeInput = (e : any) => {
    try{
      const {name , value} : {name: string , value: string | number} = e.target
    setFormData({...formData, [name] : value})
    }catch(e){
      handleError('Enter valid Fields!')
    }
  }
  const handleSubmit = () => {
    try{
      if(!EMAIL_REGEX.test(email)) return handleError('Enter a valid email')
      if(!USER_REGEX.test(name)) return handleError("Enter your Proper name")
      if(message.trim() == '') return handleError('Enter a valid message')
      SetLoading(true)
    const contact : contactType = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }
    console.log(contact,'is the contact')
    client.create(contact).then((res) => {
      console.log(res,'is the res from the sanity create contact')
      SetLoading(false)
      setIsFormSubmitted(true)
    })
    }catch(e){
      handleError('Enter valid Fields!')
    }
  }

  const [formData,setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const {name,email,message} = formData

  const [isFormSubmitted,setIsFormSubmitted] = useState<boolean>(false)
  const [loading,SetLoading] = useState<boolean>(false)


  return (
    <div className={`${styles.app__footer} app__flex`} id='contact'>
      <div className="socialmedia">
        <SocialMedia />
      </div>
      <h2 className={`head-text`}>Contact</h2>
      <div className={`${styles.app__footer_cards}`}>
        <div className={styles.app__footer_card}>
          <Image src={emailPic} alt="" className={styles.img} />
          <a href="mailto:whatthe12hell@gmail.com" className='p-text'>whatthe12hell@gmail.com</a>
        </div>
        <div className={styles.app__footer_card}>
          <Image src={images.mobile} alt="" className={styles.img} />
          <a href="tel:+919037426810" className='p-text'>9037426810</a>
        </div>
      </div>
     {
      isFormSubmitted ? <div style={{height: 500}} >
        <h3 className={`head-text`}>Your Form is Submitted to Adwaith!.</h3>
      </div> : (
        <div className={`${styles.app__footer_form} app__flex`}>
        <div className='app__flex'>
          <input type="text" autoComplete='off' className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input type="email" autoComplete='off' className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          {/*@ts-ignore */}
          <textarea name="message" id="" cols="30" rows="10" className='p-text' placeholder='Your Message' 
          autoComplete='off'
          onChange={handleChangeInput} 
          >{message}</textarea>
        </div>
        <button type='button' className={`p-text`}
        onClick = {handleSubmit}
        >{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      )
     }
     <div className="navigationDots">
      <NavigationDots active='contact' />
     </div>
    </div>
  )
}

export default Footer