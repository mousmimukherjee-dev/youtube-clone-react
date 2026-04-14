import styles from "./search.module.css"
import { SearchVedio } from "../SearchVedio"
import { SearchHistory } from "../../Components/SearchHistory"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { SearchFeed } from "../../Components/SearchFeed"
import { apiKEY } from "../../data/data"



export const Search=()=>{

  const { query , videoId } = useParams();


  return(

    <div className={styles.searchContainer}>
    {/* <SearchVedio query={query} videoId={videoId}/> */}
    <SearchFeed query={query} videoId={videoId}/>
    </div>

  )
}
