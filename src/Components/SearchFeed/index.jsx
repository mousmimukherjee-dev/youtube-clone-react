import styles from "./searchfeed.module.css"
import { apiKEY } from "../../data/data"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { valueConverter } from "../../data/data"
import { useParams } from "react-router-dom"
import { Sidebar } from "../../Components/Sidebar"
import moment from "moment"


export const SearchFeed=({ videoId})=>{

  const [ searchFeed , setSearchFeed] = useState([])
  const { query } = useParams()

  const fetchData = async () =>{

    try{
     
      const vedio_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&order=relevance&key=${apiKEY}`
       const res = await fetch(vedio_url);
       const data = await res.json();
       console.log(data);
       setSearchFeed(data.items)

    }
    catch(error){

      console.log("An error occured" , error)
    }
  }

  useEffect(()=>{

    if(query){
      fetchData();
    }
   
  },[query])
   
  return(
    <div className={styles.feed}>
      
      {searchFeed?.filter((item) => item.id.videoId).map((item,index)=>{

        return (
        
      <NavLink to={`/searchvedio/${query}/${item.id.videoId}`} className={styles.card} key={index} >
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      {/* <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p> */}
    </NavLink>
    )
      })}
   
    </div>
  )
}