import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

function Feed() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/posts/timeline/${user._id}`
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender setPosts={setPosts} />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.img}
          message={post.desc}
          timestamp={post.createdAt}
          user={post.userId}
          image={post.img}
        />
      ))}
    </div>
  );
}
export default Feed;
