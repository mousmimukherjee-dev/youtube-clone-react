import { useState } from "react"
import { Feed } from "../../Components/Feed"
import { Sidebar } from "../../Components/Sidebar"
import styles from "./home.module.css"
export const Home=({sidebar})=>{

  const [category , setCategory] = useState(0)

  return(

    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`${styles.container} ${sidebar ? "" : styles.largeContainer}`}>
      <Feed category={category} setCategory={setCategory}/>

    </div>

    </>
  )
}