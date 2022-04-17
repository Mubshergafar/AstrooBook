import { Avatar } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Post.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

function Post({ profilePic, message, timestamp, userId, image }) {
  //like functionality
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `http://localhost:3001/api/users/${currentUser._id}`
      );
      console.log("data", data);
      setUser(data);
    };
    fetchUser();
  }, []);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post__top">
        <Link to={`profile/${user}`}>
          <Avatar src={currentUser.profilePicture} className="post__avatar" />
        </Link>
        <div className="post__topInfo">
          <h3>
            {currentUser.firstName} {currentUser.lastName}
          </h3>
          <p>{new Date(timestamp).toDateString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option" onClick={likeHandler}>
          <ThumbUpIcon />
          <p>Like</p>
          <p>{like} likes</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
