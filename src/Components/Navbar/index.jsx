import styles from "./navbar.module.css"
import menuIcon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search.png"
import uploadIcon from "../../assets/upload.png"
import moreIcon from "../../assets/more.png"
import notificationIcon from "../../assets/notification.png"
import profileIcon from "../../assets/jack.png"
import { useNavigate } from "react-router-dom"


export const Navbar=({sidebar,setSidebar})=>{

  const navigate= useNavigate()


  return(
    <nav className={styles.flexDiv}>

      <div className={`${styles.navLeft} ${styles.flexDiv}`}>
        <img src={menuIcon} alt="" className={styles.menuIcon} onClick={()=>setSidebar(prev => prev === false ? true : false)}/>
        <img src={logo} alt="" className={styles.logo} onClick={()=>navigate("/")}/>

      </div>
      <div className={`${styles.navMiddle} ${styles.flexDiv}`}>

        <div className={`${styles.searchBox} ${styles.flexDiv}`}>
          <input type="text"  placeholder="Search"/>
          <img src={searchIcon} alt="" />
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