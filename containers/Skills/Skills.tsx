import React, { useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import {motion} from 'framer-motion'
import { urlFor} from '@/client'
import styles from './Skills.module.scss'
import ReactToolTip from 'react-tooltip'
import SocialMedia from '@/components/socialmedia/SocialMedia'
import NavigationDots from '@/components/NavigationDots/NavigationDots'

const Skills = ({skills} : any) => {
  console.log(skills,'is the skills')
  return (
    <div className={`${styles.app__skills}`} id='skills'>
      <div className="socialmedia">
        <SocialMedia />
      </div>
      <h2 className={`head-text`}>Skills</h2>
      
      <div className={`${styles.app__skills_container}`}>
        <motion.div
        className={`${styles.app__skills_list}`}
        >
          {
            skills && skills.map((skill : any,index : number) => (
              <motion.div
              whileInView={{opacity: [0,1]}}
              transition = {{duration: 0.5}}
              className = {`${styles.app__skills_item} app__flex`}
              key={`skill${skill.name}`}
              >
                <div className={`app__flex`} >
                  <img src={urlFor(skill.icon)} alt="j" />
                </div>
                <p className={`p-text`}>{skill.name}</p>
              </motion.div>
             ))
          }
        </motion.div>
      </div>
      <div className="navigationDots">
        <NavigationDots active='skills' />
      </div>
    </div>
  )
}

export default Skills