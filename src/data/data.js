export const apiKEY= import.meta.env.VITE_YOUTUBE_API_KEY
export const apiKEY2= import.meta.env.VITE_YOUTUBE_API_KEY2

export const valueConverter=(value)=>{

  if(value > 1000000){

    return Math.floor(value/1000000)+"M"
  }
  else if(value > 1000){

    return Math.floor(value/1000)+"K"
  }else{

    return value
  }

}
