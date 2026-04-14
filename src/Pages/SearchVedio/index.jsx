import { useEffect, useState } from "react"
import { apiKEY2 } from "../../data/data"
import { useParams } from "react-router-dom"
import styles from "./searchvedio.module.css"
import { SearchRecommend } from "../../Components/SearchRecommend"





export const SearchVedio=( )=>{

  const[search , setSearch] = useState([])

  const { query , videoId} = useParams();

  const fetchSearchVedio= async ()=>{

    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=${apiKEY2}`
    const res = await fetch(URL);
    const data = await res.json();
    setSearch(data?.items)

  }

  useEffect(()=>{
  
    if(query){
     
        fetchSearchVedio();
        
    }

  },[query])

  return(


      
      <div className={styles.searchVedio}>
      {search.map((item)=>{

        return <div className={styles.playSearch} >
           <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1` } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <h3>{item.snippet.title}</h3>    
          
        </div>
      })}
     
       <SearchRecommend  videoId={videoId}/>
      
    
    </div>


   
  )
}