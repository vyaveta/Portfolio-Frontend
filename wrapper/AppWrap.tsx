import React, { Component } from 'react'
import NavigationDots from '@/components/NavigationDots/NavigationDots'
import SocialMedia from '@/components/socialmedia/SocialMedia'

//@ts-ignore
const AppWrap = (Component, idName) => function HOC(){
  return (
    <div id={idName} className={`app__container `}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
       <Component />
       {/* <div className="copyright">
       <p className='p-text'>@2023 Vyaveta</p>
       <p className='p-text'>All rights reserved</p>
       </div> */}
      </div>
      { /*@ts-ignore*/}
      <NavigationDots active={idName} /> 
    </div>
  )
}

export default AppWrap