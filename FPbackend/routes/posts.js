const router = require("express").Router();
const { promise } = require("bcrypt/promises");
const Post = require("../modles/Post");
const User = require("../modles/User");

// create a post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a post

router.put("/:id", async (req, res) => {
  try {
    // finding the post
    const post = await Post.findById(req.params.id);
    //chacking the owner of this post
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } else {
      res.status(403).json("you can update only your post ");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a post
router.delete("/:id", async (req, res) => {
  try {
    // finding the post
    const post = await Post.findById(req.params.id);
    //chacking the owner of this post
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The post has been deleted");
    } else {
      res.status(403).json("you can delete only your post ");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// like a post/dislike

router.put("/:id/like", async (req, res) => {
  try {
    //find the post
    const post = await Post.findById(req.params.id);
    //check wither the like array incloudes the user or not
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a post
router.get("/:id", async (req, res) => {
  try {
    // finding the post
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get timeline
router.get("/timeline/:userId", async (req, res) => {
  try {
    // finding the current user
    const currentUser = await User.findById(req.params.userId);
    if (!currentUser) return res.status(401).json({ meesage: "no user" });
    //finding all the post for the user
    const userPosts = await Post.find({ userId: currentUser._id });
    // finding the post of the following
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    // conactinate the user and his following posts
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
