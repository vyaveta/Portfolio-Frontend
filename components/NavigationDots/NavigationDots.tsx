import React from 'react'
import {useRef} from 'react'
import styles from './NavigationDots.module.scss'
//@ts-ignore
const NavigationDots = ({active}) => {



  return (
    <div className={`${styles.app__navigation} `}>
        {
            ['home','about', 'skills', 'works', 'testimonials' ,'contact'].map((item : string,index : number) => (
                // <li key={`navigationDots${item}` }>
                    <a 
                    href={`#${item}`}
                    key={`hrefdot${item+index}`}
                    className={`${styles.app__navigation_dot}`}
                    style={{background: '#313BAC'}}
                    /*@ts-ignore */ 
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    style={active === item ? {background: '#313BAC'} : {background: ''}}
                    />
                // </li> 
            ) )
        }
    </div>
  )
}

export default NavigationDots