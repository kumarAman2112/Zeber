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
          <img src="data:image/jpeg;base64,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" alt="" className="shareProfileImg" />
          <input
            placeholder="What's in your mind?"
            className="shareInput"
            ref={desc}
            required
          />
        </div>
        <hr className="sharehr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareoptions">
            <label htmlFor="file" className="shareoption">
              
              {isImgSelected?<img src={image} alt="" style={{width:'3.5rem',height:'3.7rem',borderRadius:'.1rem',objectFit:'contain'}}></img>:<><PermMedia htmlColor="crimson" className="shareicon" /><span className="shareoptiontext">photos</span></>}
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
