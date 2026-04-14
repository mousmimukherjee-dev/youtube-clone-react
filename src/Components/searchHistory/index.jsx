import { useEffect, useState } from "react"
import styles from "./search.module.css"
import { NavLink, useParams } from "react-router-dom";
import { apiKEY2 } from "../../data/data";
import { valueConverter } from "../../data/data"


export const SearchHistory=({ query })=>{



  const[searchHistory , setSearchHistory] = useState([]);

  const fetchSearchHistory= async () =>{

   const URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&order=relevance&key=${apiKEY2}`

   try{

    const res = await fetch(URL)
    if(!res.ok){

      throw new Error(`An Error Occured while fetching data ${res.status}`)
    }
    const data= await res.json()
    setSearchHistory(data.items)


   }

   catch(error){

    console.log("An error occured", error)
   }

  }

  useEffect(()=>{

    if(!query)return;

    fetchSearchHistory()

  },[query])


  return(

    <div className={styles.searchHistory}>

      {searchHistory?.map((item,index)=>{

        return (

          <NavLink to={`/search/${item.id.videoId}`} className={styles.searchVideoList} key={index}>
           <img src={item.snippet.thumbnails.medium.url} alt="" />
           <div className={styles.vidInfo}>
                     <h4>{item.snippet.title}</h4>
                     <p>{item.snippet.channelTitle}</p>
                     {/* <p>{valueConverter(item.statistics.viewCount)} Views</p> */}
                   </div>

          </NavLink>
        )
      })}

    </div>
  )
}