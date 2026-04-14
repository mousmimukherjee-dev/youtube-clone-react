import styles from "./feed.module.css"
import { apiKEY } from "../../data/data"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { valueConverter } from "../../data/data"
import moment from "moment"


export const Feed=({category})=>{

  const [ data , setData] = useState([])

  const fetchData = async () =>{

    try{
     
        const vedio_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=SE&videoCategoryId=${category}&key=${apiKEY}`
       const res = await fetch(vedio_url);
       const data = await res.json();
       console.log(data);
       setData(data.items)

    }
    catch(error){

      console.log("An error occured" , error)
    }
  }

  useEffect(()=>{

    fetchData()
  },[category])
   
  return(
    <div className={styles.feed}>
      {data?.map((item,index)=>{

        return (
        
      <NavLink to={`/video/${item.snippet.categoryId}/${item.id}`} className={styles.card} key={index} >
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
    </NavLink>
    )
      })}
   
    </div>
  )
}