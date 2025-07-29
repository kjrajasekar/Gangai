import video2 from "../image/video.mp4";
function Videoyou() {
  return (
    <div 
      className="ratio corner-wrapper" 
     
    >
      <iframe 
        src= {video2}
        title="YouTube video" 
        allowFullScreen 
      
        style={{ width: "100%", height: "100%", borderRadius: "50%", border: "none" }} // Make iframe fully fill the container
      ></iframe>
    </div>
  );
}

export default Videoyou;
