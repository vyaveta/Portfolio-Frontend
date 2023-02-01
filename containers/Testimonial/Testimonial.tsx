import React,{useState} from 'react'
import styles from './Testimonials.module.scss'
import {motion} from 'framer-motion'
import {HiChevronDoubleRight , HiChevronDoubleLeft} from 'react-icons/hi'
import { urlFor } from '@/client'

const Testimonial = ({testimonials} : any) => {
  console.log(testimonials,'is the testimonials')

  const [currentIndex,setCurrentIndex]  = useState<number>(0)

  const handleClick = (index: number) : void => {
    setCurrentIndex(index)
  }

  return (
    <div className={`${styles.app__testimonial}`} id='testimonials'>
      <h2 className={`head-text`} >
       Testimonials
        </h2>
      {
        testimonials?.length && (
          <>
            <div className={`${styles.app__testimonial_item} app__flex`}>
              <img src={urlFor(testimonials[currentIndex].imageUrl)} alt="" />
              <div className={`${styles.app__testimonial_content}`}>
                <p className={`p-text`}>{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className={`bold-text`}>{testimonials[currentIndex].name}</h4>
                  <h4 className={`p-text`}>{testimonials[currentIndex].designation}</h4>
                </div>
              </div>
            </div>
            <div className={`${styles.app__testimonial_btns} app__flex`}>
              <div className={`app__flex`}
              onClick={() => handleClick( currentIndex === 0 ? testimonials.length-1 : currentIndex-1)}
              >
                <HiChevronDoubleLeft />
              </div>
              <div className={`app__flex`}
              onClick={() => handleClick( currentIndex === testimonials.length-1  ? 0 : currentIndex+1)}
              >
                <HiChevronDoubleRight />
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Testimonial