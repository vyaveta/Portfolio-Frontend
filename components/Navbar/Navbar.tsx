import React, { useState } from 'react'
import Image from 'next/image'
import { images } from '@/constants'
import css from './Navbar.module.scss'
import {HiMenuAlt4 , HiX} from 'react-icons/hi'
import {TbMenu} from 'react-icons/tb'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

interface prop{
  navBarDetails: string[],
}

const Navbar = ({navBarDetails}: prop) => {

  const [toggle,setToggle] : [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false)

  return ( 
    <nav className={`${css.app__navbar}`}>
      <div className={`${css.app__navbar_logo}`}>
        <Image src={images.logo} width={100} height={40} alt='logo' />
        
      </div>
      <ul className={`${css.app__navbar_links}`}>
        {
          navBarDetails.map((element : string,index : number) => {
            return (
              <li key={index}>
                <div className={`app__flex p-text `}></div>
                <a href={`#${element}`}>{element}</a>
              </li>
            )
          })
        }
      </ul>
      <div className={`${css.app__navbar_menu}`}>
        <HiMenuAlt4 className={css.white} onClick={() => setToggle(true)} />
        {/* <Icon icon="tabler:menu" color="white" style={{color: 'white'}} className={css.white} vFlip={true} onClick={() => setToggle(!toggle)} /> */}
        {toggle && (
          <motion.div
          whileInView={{x:[300,0]}}
          transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)} />
           <ul>
           {
          navBarDetails.map((element : string,index : number) => {
            return (
              <li key={`mobile${index}`}>
                <a href={`#${element}`} onClick={() => setToggle(false)} >{element}</a>
              </li>
            )
          })
        }
           </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar