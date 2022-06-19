const router = require("express").Router();
const User = require("../modles/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    console.log(user);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    // chacking if the user allready register
    const user = await User.findOne({ email: req.body.email });
    console.log("user is ------", user);
    if (!user) {
      return res.status(402).json("user not found").end();
    }

    // chacking if the password correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json("wrong password").end();
    }

    //if cardintial were correct
    return res.status(200).json(user).end();
  } catch (error) {
    return res.status(500).json(error).end();
  }
});

module.exports = router;
