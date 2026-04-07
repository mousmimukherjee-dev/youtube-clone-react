import { useParams } from "react-router-dom"
import { PlayVedio } from "../../Components/PlayVedio"
import { Recommended } from "../../Components/Recommended"
import styles from "./vedio.module.css"

export const Vedio=()=>{

  const{ videoId , categoryId } = useParams()

  return(

    <div className={styles.playContainer}>
      <PlayVedio videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}