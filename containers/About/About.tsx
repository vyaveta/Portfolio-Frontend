import React, { useState } from 'react'
import {motion} from 'framer-motion'
import styles from './About.module.scss'
import Image from 'next/image'
import { urlFor } from '@/client'
import AppWrap from '@/wrapper/AppWrap'
import SocialMedia from '@/components/socialmedia/SocialMedia'
import NavigationDots from '@/components/NavigationDots/NavigationDots'

interface about{
  title: string,
  description: string,
  imgUrl?: any 
}

interface props{
  abouts : about[]
}

let about : any
const About = ({abouts}: props) => {

about = abouts
  console.log(abouts,'is the abouts')
  return (
   <div className={styles.container} id='about' >
    {/*@ts-ignore */}
    <div className={'socialmedia'}>
    <SocialMedia/>
    </div>
    <div className={'navigationDots'}>
      <NavigationDots active={'about'} />
    </div>
      <h2 className={`head-text`} >
        I create 
        <span> Websites </span>
        using my
        <span> fingers!</span>
      </h2>
      <div className={`${styles.app__profiles}`}>
        {
          abouts.map((about,index) => (
            <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            key={`about${index}`}
            className={`${styles.app__profiles_item}`}
            >
              <img src={urlFor(about.imgUrl)} alt='about' width={100} height={100} />
              <h2 className={`bold-text`} style={{marginTop: 20}} >{about.title}</h2>
              <p className={`p-text`} style={{marginTop: 10}} >{about.description}</p>
            </motion.div>
          ))
        }
      </div>
   </div>
  )
}

export default About