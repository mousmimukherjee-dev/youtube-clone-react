import styles from "./searchrecommend.module.css"
import { apiKEY } from "../../data/data"
import { useState , useEffect } from "react"
import { valueConverter } from "../../data/data"
import { NavLink, useParams } from "react-router-dom"


export const SearchRecommend= ({videoId})=>{



  const[apiData , setApidata] = useState([]);

  const fetchApi= async () =>{

    const recommended_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SE&maxResults=10&key=${apiKEY}`
    try{
     
    const res = await fetch(recommended_url)
    if(!res.ok){

      throw new Error(`An Eroor ${res.status}` )
    }
    const data= await res.json()
    setApidata(data.items)

    }
    catch(error){

      console.log("An error occured while fetching data", error)
    }
  

  }

  useEffect(()=>{

    if(!videoId)return;

    fetchApi()
  },[videoId])

  return(

    <div className={styles.recommended}>
      
    {apiData.map((item,index)=>{

    return(

     <NavLink to={`/searchvedio/${item.snippet.title}/${item.id}`} key={index} className={styles.sideVideoList}>
        <img src={item.snippet.thumbnails.medium.url}alt="" />
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