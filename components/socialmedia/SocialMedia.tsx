import React from 'react'
import {BsTwitter, BsInstagram , BsGithub , BsLinkedin} from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import styles from './SocialMedia.module.scss'

const SocialMedia = () => {
  return (
    <div className={`${styles.app__social}`}>
        <div>
          <a href="https://www.linkedin.com/in/adwaith-vinod-a601a6244" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
        <div>
          <a href="https://instagram.com/le_adwaith?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer"> <BsInstagram /></a>
        </div>
        <div>
        <a href="https://github.com/vyaveta" target='_blank' rel="noreferrer"><BsGithub /></a>
        </div>
    </div>
  )
}

export default SocialMedia