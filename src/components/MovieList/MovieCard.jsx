import React from 'react'
import { star } from '../../assets'
import styles from './movielist.module.css'

export const MovieCard= ({movie})=>  {
  return (
    <div className={styles.movieCard}>
        <a href={`https://www.themoviedb.org/movie/${movie.id}`}
        target='_blank'
        className='p-3 '>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `}
            
            className='rounded-sm'
            alt="" />
            <div className={styles.contentCard}>
                <h3 className=''>{movie.original_title}</h3>
                    <div className='justify-between flex text-[1.1rem] text-yellow-300 align-middle'>
                        <p className=''>{movie.release_date}</p>
                        <p className='flex items-center'>{movie.vote_average} <img src={star} alt="" className={`${styles.imageMargin} w-4 h-4`}/></p>
                    </div>
                <p className='mt-2'>
                    {movie.overview.slice(0,100)+ '...'}
                </p>
            </div>
        </a>
    </div>
  )
}

