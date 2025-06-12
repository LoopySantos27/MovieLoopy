import React, { useState } from 'react'
import { logoIcon,menu, close } from '../../assets'
import { navBarData } from '../../data/InternalData'
import styles from './navbar.module.css'
import DarkMode from '../DarkMode/DarkMode'
import { Link } from 'react-scroll'

export const Navbar=()=> {
    const [hamMenu, setHamMenu] = useState(false)
  return (
    
    <header className={styles.headerPage}>

        <nav className={styles.navBar}>

            <img src={logoIcon}  
            className={styles.logo}/>

            {/** Imagen que se va a mostrar dependiendo si esta en pequeños dipositivos o no */}
            <img 
            className={`${styles.hamMenuNormal } ${hamMenu ? styles.hamMenuPressed : styles.hamMenuP}`}
            src={hamMenu ? close : menu} 
            alt="menu-buton" 
            onClick={()=>setHamMenu(!hamMenu)} />
            

            {/**Con el boton al cambiar y hacer true el menu hace que aparezca el icono y con este su contenido */}
            {/**Cuando hamMenu es true, aparece el contenido escondido */}
            <div className= {`${styles.menuItems} ${hamMenu && styles.menuHamOpen} `}
            onClick={()=> setHamMenu(false)}>
                {
                    navBarData.map((index,i)=>(
                        <button key={i} className={`${styles.textNavBar} max-[955px]:text-[2.3rem] hover:scale-110`}
                         onClick={()=> setHamMenu(false)}>

                            <Link to ={index.apiReference} spy={true} smooth={true} offset={50} 
                                duration={500}>
                                    {index.navTitle}
                            </Link>

                            
                        </button>
                    )
                )}
            </div>

            <DarkMode className='flex absolute right-0' />
            
        </nav>

        

        
    </header>
  )
}

