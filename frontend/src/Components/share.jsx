import"./share.css"
import { PermMedia,Label,Room,EmojiEmotions } from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
<div className="sharewrapper">
    <div className="shareTop">
     <img src="/assets/aman.jpg" alt="" className="shareProfileImg"/>
        <input placeholder="What's in your mind?" className="shareInput"/>   
    </div>
    <hr className="sharehr" />
    <div className="shareBottom">
        <div className="shareoptions">
            <div className="shareoption">
                <PermMedia htmlColor="tomato" className="shareicon"/>
                <span className="shareoptiontext">photo or video</span> 
            </div>
            <div className="shareoption">
                <Label htmlColor="blue" className="shareicon"/>
                <span className="shareoptiontext">Tag</span> 
            </div>
            <div className="shareoption">
                <Room htmlColor="green" className="shareicon"/>
                <span className="shareoptiontext">Location</span> 
            </div>
            <div className="shareoption">
                <EmojiEmotions htmlColor="goldenrod" className="shareicon"/>
                <span className="shareoptiontext">Feelings</span> 
            </div>
        </div>
        <button className="sharebutton">Share</button>
    </div>
</div>
    </div>
  )
}
