import styles from "./playvedio.module.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import userProfile from "../../assets/user_profile.jpg"
import { useState,useEffect } from "react"
import { apiKEY } from "../../data/data"
import { data, useParams } from "react-router-dom"
import { valueConverter } from "../../data/data"
import moment from "moment"

export const PlayVedio=()=>{

  const{videoId} = useParams()

  const[apiData , setApidata] = useState(null);
  const[channelData, setChanneldata]=useState(null);
  const[commentData , setCommentdata]=useState([]);
  const[btnText , setBtnText]= useState("Subscribe")

  const fetchVedioData= async () =>{

    const URL= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=50&key=${apiKEY}`
    try{

       const res = await fetch(URL);
       const data = await res.json();
       setApidata(data.items[0])

    }catch(error){

      console.log("An error occured", error)
    }
   
  }

  useEffect(()=>{

    fetchVedioData();
  },[videoId])

  const fetchChanneldata= async () =>{
   
    try{
     
      const channel_URL= `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${apiKEY}`
      const res = await fetch(channel_URL)
      const data= await res.json()
      setChanneldata(data.items[0])

    }
    catch(error){

      console.log("An error occured",error)
    } 
  }

  useEffect(()=>{

    fetchChanneldata()
  },[apiData])


  const fetchCommentData= async ()=>{

    try{
     
        const comment_URL= `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKEY}`
        const res = await fetch(comment_URL)
        const data= await res.json()
        setCommentdata(data.items)

    }
    catch(error){

      console.log("An error occured", error)

    }
  }

  useEffect(()=>{

    fetchCommentData()
  },[videoId])


  return(
    <div className={styles.playVedio}>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
      <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
       <div className={styles.playVidInfo}>
        <p>{apiData?valueConverter(apiData.statistics.viewCount) : "Loading..."} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} alt="" />{apiData? valueConverter(apiData.statistics.likeCount) : ""}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
         </div>
        </div>
         

        <hr />

        <div className={styles.publisher}>
          <img src={channelData? channelData.snippet.thumbnails.default.url : "Loading..."} alt="" />
          <div>
            <p>{apiData? apiData.snippet.channelTitle : "Loading.."}</p>
            <span>{channelData ? valueConverter(channelData.statistics.subscriberCount) : "50k"} Subscriber</span>
          </div>
          <button onClick={()=> setBtnText(btnText === "Subscribe" ? "Subscribed" : "Subscribe")}>{btnText}</button>
        </div>
        <div className={styles.vidDescription}>
          <p>{apiData? apiData.snippet.localized.description.slice(0,300) : ""}</p>
          <p>Subcribe to my channel to watch more tutorials on web development</p>
          <hr />
          <h4>{apiData? valueConverter(apiData.statistics.commentCount) : "Loading..."}</h4>

          {commentData?.map((item,index)=>{


          return(

            <div className={styles.comment} key={index}>
             <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
             <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className={styles.commentAction}>
                
                <img src={like} alt="" />
                <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="" />
             
              </div>
              </div>
            </div>
          )
          })}
          
          
        </div>
       </div>

   

  )
}