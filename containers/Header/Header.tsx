import React from 'react'
import {motion} from 'framer-motion'
import style from './Header.module.scss'
import { images } from '@/constants'
import Image from 'next/image'
import circle from '../../assets/circle.svg'
import AppWrap from '@/wrapper/AppWrap'

const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'  
    }
  },
}

const Header = () => {
  const tag1 = `<>`
  const tag2 = `</>`
  const p = `Self taught MERN stack developer who spends most of his time staring at the code and now you are staring at the Adwaith's portfolio made using Next.js and Sanity.`
  return (
    <div className={`app__flex ${style.app__header} ${style.home}`}>
      <motion.div
      whileInView={{x: [-100,0], opacity: [0,1]}}
      transition = {{duration: 0.9}}
      className={style.app__header_info}
      >
        <div className={style.app__header_badge}>
          <div className={`app__flex ${style.badge_cmp}`}>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
            <p className={`p-text`}>Hi I am </p>
            <h1 className={`head-text`}>Adwaith</h1>
            </div>
          </div>
          <div className={`${style.tag_cmp} app__flex`}>
          <p className={`p-text`}>Self taught</p>
          <p className={`p-text`}>Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{x: [-100,0], opacity: [0,1]}}
      transition={{duration: 0.5 , delayChildren: 0.5}}
      className={`${style.app__header_img}`}
      >
        {/* <Image  */}
        {/* <motion.img
        whileInView={{scale:[0,1]}}
        transition={{duration: 1, ease: 'easeInOut'}}
        src="https://img.icons8.com/dusk/64/null/circle.png"
        alt=''
        className={`${style.overlay_circle}`}
        />
      </motion.div> */}
       <motion.div
        whileInView={{scale:[0,1]}}
        transition={{duration: 1, ease: 'easeInOut'}}
        className={`${style.overlay_circle}`}
        >
          <div className="">
            <p className={style.introP}><span className={style.spanTag}>{tag1}</span>{p} <span className={style.spanTag}>{tag2}</span></p>
          </div>
          </motion.div>
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className={style.app__header_circles}
      >
        {
          [images.typescript, images.javascript, images.sass].map((image,index) => (
            <div className={`app__flex ${style.circle_cmp}`} key={`circle${index}`}>
              <Image src={image} width={50} height={50} alt='image' />
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default AppWrap(Header,'home') 