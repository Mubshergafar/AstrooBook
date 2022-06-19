import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import "./MessageSender.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

function MessageSender({ setPosts }) {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const img = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: img.current.value,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/posts",
        newPost
      );
      setPosts((prevPosts) => [data, ...prevPosts]);
      desc.current.value = "";
      img.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.profilePicture} />
        <form onSubmit={submitHandler}>
          <input
            ref={desc}
            className='messageSender__input'
            placeholder={`What's on your mind ,  ${user.firstName} ${user.lastName} ? `}
          />
          <input placeholder='image URL (Optional)' ref={img} />
          <button type='submit'>Hidden submit</button>
        </form>
      </div>
      <div className='MessageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Vedio</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
          <input
            style={{ display: "none" }}
            type='file'
            id='file'
            accept='.png,.jpeg,.jpg'
          />
        </div>
        <div className='messageSender__option '>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
