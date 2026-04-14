import styles from "./search.module.css"
import { useParams } from "react-router-dom"
import { SearchFeed } from "../../Components/SearchFeed"




export const Search=()=>{

  const { query , videoId } = useParams();


  return(

    <div className={styles.searchContainer}>
   
    <SearchFeed query={query} videoId={videoId}/>
    </div>

  )
}
