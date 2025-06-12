import React from 'react'
import styles from './movielist.module.css'
export const FilterGroup=({minRating,onRatingClick, ratings})=> {
  return (
    <ul className={styles.clasificationList}>
        {
            ratings.map(rate=> <li
                className=
                {minRating === rate ? styles.clasificationRateSelected : styles.clasificationRate}
                key={rate}
                onClick={()=>onRatingClick(rate)}>
                    {rate}+ Star
            </li>)
        }
    </ul>
  )
}


