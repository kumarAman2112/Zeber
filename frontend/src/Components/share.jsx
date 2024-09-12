import { useRef, useState } from "react";
import "./share.css";
import axios from "axios";
import { PermMedia, Label } from "@mui/icons-material";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 60px",

};
export default function Share() {
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [shareLoading,setShareLoading] = useState(false);
  const [isImgSelected,setIsImgSelected] = useState(false);
  const [image, setImage] = useState(null);

  const fileSelectorHandler = (e) => {
    
    
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      setIsImgSelected(true)
    
    console.log(file)
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      data.append("desc", desc.current.value);
      data.append("userId", "66ce18d463106fd96982f201");
      try {
        setShareLoading(true);
        await axios.post("/api/v1/posts/upload", data);
        setShareLoading(false);
        setIsImgSelected(false);
        window.location.reload();
      } catch (err) {
        console.log("Error",err);
      }
    }
 
  };
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="shareTop">
          <img src="/assets/aman.jpg" alt="" className="shareProfileImg" />
          <input
            placeholder="What's in your mind?"
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="sharehr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareoptions">
            <label htmlFor="file" className="shareoption">
              
              {isImgSelected?<img src={image} alt="" style={{width:'3.5rem',height:'3.5rem',borderRadius:'.5rem',objectFit:'cover'}}></img>:<><PermMedia htmlColor="crimson" className="shareicon" /><span className="shareoptiontext">photo or video</span></>}
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".jpg,.jpeg,.png"
                onChange={fileSelectorHandler}
              />
            </label>
            <div className="shareoption">
              <Label htmlColor="green" className="shareicon" />
              <span className="shareoptiontext">Tag</span>
            </div>
           
          </div>
          {shareLoading?<ClipLoader
  color="#286ff3"
  loading="true"
  cssOverride={override}
  size={25}
  aria-label="Loading Spinner"
  data-testid="loader"/>:<button className="sharebutton" type="submit">
            Share
          </button>
}
        </form>
      </div>
    </div>
  );
}
