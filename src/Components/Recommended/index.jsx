import styles from "./recommended.module.css"
import { apiKEY } from "../../data/data"
import { useState , useEffect } from "react"
import { valueConverter } from "../../data/data"
import { NavLink } from "react-router-dom"


export const Recommended=({categoryId })=>{

  const[apiData , setApidata] = useState([]);

  const fetchApi= async () =>{

    const recommended_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=50&regionCode=SE&key=${apiKEY}`
    const res = await fetch(recommended_url)
    const data= await res.json()
    setApidata(data.items)

  }

  useEffect(()=>{

    fetchApi()
  },[])

  return(

    <div className={styles.recommended}>
      
    {apiData.map((item,index)=>{

    return(

     <NavLink to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className={styles.sideVideoList}>
        <img src={item.snippet.thumbnails.medium.url}alt="" />
        <div className={styles.vidInfo}>
          <h4>{item.snippet.title}</h4>
          <p>{item.snippet.channelTitle}</p>
          <p>{valueConverter(item.statistics.viewCount)} Views</p>
        </div>
      </NavLink>

    )
    })}
    </div>
  )
}