import React from 'react'
import styles from './footer.module.css'
import { footerLinks } from '../../data/InternalData'

export const  Footer=()=> {
  return (
    <footer className={styles.footerSection}>
          <div className="screen-max-width">
            <div className={styles.contactSection}>
              <p className="font-semibold text-gray text-sm">
                Portfolio Page {' '}
                <a href="https://gerardosantos.netlify.app/">
                  <span className="underline text-blue">
                  Gerardo Santos Portfolio {' '}
                  </span>
                </a>
                or send me an email {' '}
                <a href="mailto:gerardodsc27@gmail.com" target='_blank'>
                  <span className="underline text-blue">
                  gerardodsc27@gmail.com
                  </span>{' :) '}
                </a>
              </p>
              <p className='font-semibold text-gray text-sm'>
                Data from the movies retrieved from the API of themoviedb.org, 
                here is the link of the webPage.{' '}
                <a href="https://www.themoviedb.org/" target='_blank'>
                  <span className='underline '>Themoviedb.org</span>
                </a>
              </p>
            </div>
    
            <div className="bg-neutral-700 my-5 h-[1px] w-full" />
    
            <div className={`flex md:flex-row flex-col md:items-center justify-between`}>
              <p className={`${styles.marginTop} font-semibold text-gray text-xs`}>Copright @ 2025 The moviedb org. All rights reserved.</p>
              <div className={`flex gap-2  ${styles.marginTop}`}>
                {footerLinks.map((_id,i)=>(
                  <a key={i} href={_id.link} className='hover:text-white font-semibold text-gray 
                  text-xs flex items-center ' target='_blank'>
                    <img src={_id.icon} className={`${styles.marginInline} w-5 h-5`} alt="" />
                    {_id.text}
                    {' '}
                    {i !== footerLinks.length -1 &&(
                    <span className={styles.marginInline}> | </span>
                  )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
  )
}
