import styles from "./navbar.module.css"
import menuIcon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search.png"
import uploadIcon from "../../assets/upload.png"
import moreIcon from "../../assets/more.png"
import notificationIcon from "../../assets/notification.png"
import profileIcon from "../../assets/jack.png"
import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


export const Navbar=({sidebar,setSidebar})=>{

    const navigate= useNavigate()
    const location = useLocation()

  const[input, setInput] = useState("");
 
  const handelChange=(e)=>{

    setInput(e.target.value)

  }

  const handelSearch=(e)=>{
   
    e.preventDefault()
    if(input){

      navigate(`/search/${input}`)
      setInput("");
    }

  }
  return(
    <nav className={styles.flexDiv}>

      <div className={`${styles.navLeft} ${styles.flexDiv}`}>
        <img src={menuIcon} alt="" className={styles.menuIcon} onClick={()=>setSidebar(prev => !prev)}/>
        <img src={logo} alt="" className={styles.logo} onClick={()=>navigate("/")}/>
      </div>
      <div className={`${styles.navMiddle} ${styles.flexDiv}`}>
        <div className={`${styles.searchBox} ${styles.flexDiv}`}>
          <input type="text"  placeholder="Search" value={input} onChange={handelChange}/>
          <img src={searchIcon} alt="" onClick={handelSearch}/>
        </div>
      </div>
      <div className={`${styles.navRight} ${styles.flexDiv}`}>
        <img src={uploadIcon} alt="" />
        <img src={moreIcon} alt="" />
        <img src={notificationIcon} alt="" />
        <img src={profileIcon} alt="" className={styles.userIcon}/>
      </div>
    </nav>
  )
}