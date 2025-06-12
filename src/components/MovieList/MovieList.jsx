import React, { Suspense, useEffect, useState } from 'react'
import lodash from 'lodash'
import { MovieCard } from './MovieCard'
import { FilterGroup } from './FilterGroup'
import styles from './movielist.module.css'


export const MovieList =({type, title, emoji})=> {

    //Aqui vamos a guardar las peliculas traidas de la api
    const [movies,setMovies] = useState([])
    //Son las peliculas a mostrar una vez filtradas
    const [filterMovies, setFilterMovies] = useState([])
    //El rating de las peliculas que se está pidiendo
    const[minRating, setMinRating] = useState(0)
    const [sort,setSort]= useState ({
        by: 'default',
        order: 'asc'
    })        

    //Vamos a agarrar los datos de la api  y guardarlos al inicio de forma asyncrona
    useEffect(()=>{
       fetchMovies();
       console.log(type)
    },[])

    //Se va a re-renderear cada que se actualice sort
    useEffect(()=>{
        if(sort.by !== 'default')
        {
            const sortedMovies =lodash.orderBy(filterMovies,[sort.by], [sort.order])
            setFilterMovies(sortedMovies)
        }
    }, [sort])

    //Agarramos las peliculas de forma asincrona para que el tiempo sea correspondiente al tiempo de 
    //descarga de cada dispositivo
    const fetchMovies = async ()=>{
        const response = await  fetch
        (`https://api.themoviedb.org/3/movie/${type}?api_key=89f69731b61691c21e01e0d45aee9745`);
        const data = await response.json()
        setMovies(data.results)
        setFilterMovies(data.results)
    }

    const handleFilter =(rate) =>{
        if(rate == minRating ){
            resetValues()
        }else{
            setMinRating(rate)
    
            const filtered = movies.filter((movie) => movie.vote_average >= rate)
            setFilterMovies(filtered)
        }
    }

    const resetValues =() =>{
            setFilterMovies(movies)
            setMinRating(0)
    }
    
    const handleSort = e =>{
        const {name,value} = e.target;
        if(value === 'default'){
            resetValues()
        }else{
            setSort((prev)=>({...prev, [name]: value}));
        }
    }
  return (
    <Suspense fallback={
        <h2>Loadiingggg</h2>
    }>

    <section id={type}>
        <div className={styles.headerList}>
            <h2 className=
            'text-(--color-text) flex items-center font- font-bold  text-4xl'>
                {title} {' '}
                <img src={emoji} className={styles.emojiSection} alt={`${emoji} icon`} />
            </h2>
            <div className=' flex flex-row max-[830px]:flex-col gap-4 '>
                <FilterGroup 
                    minRating ={minRating}
                    onRatingClick={handleFilter}
                    ratings ={[8,7,6]}
                />

                <select name="by" id="" onChange={handleSort} value={sort.by} 
                className={styles.sortingSection}>
                    <option className='' value="default">Sort By</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>

                <select name="order" id="" onChange={handleSort} value={sort.order} 
                className={styles.sortingSection}>
                    <option value="default">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
        <div className={styles.cardsSection}>
            {
               filterMovies.map((movie)=> (<MovieCard key={movie.id} movie={movie}/>))
            }
        </div>
    </section>
    </Suspense>
  )
}
