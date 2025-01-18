import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const VideoCarousel = () => {
          const videoRef = useRef([])
          const videoSpanRef = useRef([])
          const videoDivRef = useRef([])


          const [video, setVideo] = useState({
            isEnd: false,
            startPlay: false,
            videoId: 0,
            iisLastVideo : false,
            isPlaying : false,
          })
          const [loadedData, setLoadedData] = useState([]);
          const {isPlaying,isEnd,iisLastVideo,startPlay,videoId} = video;
          useGSAP ( () =>{

            gsap.to( "" ,{});
            gsap.to( '',{});
          },[])
 
  return (
    <section>
      
    </section>
  )
}

export default VideoCarousel