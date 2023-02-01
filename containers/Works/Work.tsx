import React, { useState , useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import {motion} from 'framer-motion'
import { urlFor,client } from '@/client'
import styles from './Work.module.scss'

interface animateCardType{
  y: number,
  opacity: number
}

const Work = ({works} : any) => {

  const handleWorkFilter = (item: string) : void => {
    setActiveFilter(item)
    setAnimateCard([{y: 100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}])
      if(item == 'All') setFilterWork(works)
      else setFilterWork(works.filter((work : any) => {
        let s = false
        work.tags.map((tag : string,index : number) => {
          if(tag.toLowerCase() == item.toLowerCase()) {
            console.log(work,'incluedes')
            return s = true
          }
        })
        if(s) return work
      }))
    },500)
  }

  const [activeFilter,setActiveFilter] = useState<string>('React.Js')
  // const [animateCard,setAnimateCard] = useState<animateCardType>({y: 0, opacity: 1})
  const [animateCard,setAnimateCard] = useState<any>({y: 0, opacity: 1})

  const [worksState,setWorksState] = useState(works)
  const [filterWork,setFilterWork] = useState([])

  useEffect(() => {
    // if(works) setFilterWork(works)
    if(activeFilter == 'All') setFilterWork(works)
      else setFilterWork(works.filter((work : any) => {
        let s = false
        work.tags.map((tag : string,index : number) => {
          if(tag.toLowerCase() == activeFilter.toLowerCase()) {
            console.log(work,'incluedes')
            return s = true
          }
        })
        if(s) return work
      }))
  },[])

  return (
    <div className={styles.app__works} id='works'>
       <h2 className={`head-text`} >
        My 
        <span> GitHub </span>
        Repos and
        <span> Works </span>
        </h2>
        <div className={styles.app__work_filter}>
          {
          [ 'Web Apps' , 'React.js' , 'Next.js' , 'Nest.js', 'All'].map((item : string,index : number) => (
            <div key = {`work${index}`}
            onClick= {() => handleWorkFilter(item)}
            className={`${styles.app__work_filter_item} app__flex p-text ${activeFilter.toLowerCase() === item.toLowerCase() ? styles.item_active : ''}`}
            
            > 
            {item}
            </div>
          ))
        }
        </div>
        <motion.div
        animate={animateCard}
        transition= {{duration: 0.5, delayChildren: 0.5}}
        className={`${styles.app__work_portfolio}`}
        >
          {
            filterWork.map((workItem : any,index : number) => (
              <div key={`filterwork${index}`} 
              className={`app__flex ${styles.app__work_item}`}
              >
                <div className={`${styles.app__work_img} app__flex`} key={`app__work_img${index}`} >
                  <img src={urlFor(workItem.imgUrl)} alt={workItem.name} />
                  <motion.div
                  whileHover={{opacity: [0, 1]}}
                  transition= {{duration: 0.25,staggerChildren: 0.5, ease: 'easeInOut'}}
                  className={`${styles.app__work_hover} app__flex`}
                  >
                    <a href={workItem.projectLink} target='_blank' rel='noreferrer'>
                      <motion.div
                      whileInView={{scale: [0,1]}}
                      whileHover={{scale:[1, 0.9]}}
                      transition= {{duration: 0.25}}
                      className={`app__flex`}
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <div className={`${styles.app__work_content} app__flex`}>
                <h4 className={`bold-text`}>{workItem.title}</h4>
                <p className={`p-text`} style={{marginTop: 10}}>{workItem.description}</p>
                <div className={`${styles.app__work_tag} app__flex`}>
                  <p className={`p-text`}>{workItem.tags[0]} </p>
                </div>
                </div>
              </div>
            ))
          }
        </motion.div>
    </div>
  )
}

export default Work