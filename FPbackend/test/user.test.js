const axios = require("axios");
const assert = require("assert");
const rd = require("randomstring");

axios.defaults.baseURL = "http://localhost:3001/api";

describe("user", async () => {
  it(" should login ", async () => {
    const { data } = await axios.post("/auth/login", {
      email: "mu.g7472@gmail.com",
      password: "mubshergafar",
    });
    assert.ok(data._id != undefined);
  });

  it(" should not login", async () => {
    try {
      const { data } = await axios.post("/auth/login", {
        email: "mu.g7472@gmail.com",
        password: "wrong_password",
      });
    } catch (e) {
      assert.equal(e.response.data, "wrong password");
    }
  });

  it(" should not login with user that does not exits", async () => {
    try {
      const { data } = await axios.post("/auth/login", {
        email: "no-existant-user@example.com",
        password: "mubshergafar",
      });
    } catch (e) {
      assert.equal(e.response.data, "user not found");
    }
  });

  it("should register a new user", async () => {
    const domain = rd.generate(5);
    const user = rd.generate(5);

    const { data } = await axios.post("/auth/register", {
      firstName: user,
      lastName: rd.generate(10),
      username: rd.generate(10),
      email: `${user}@${domain}.com`,
      password: rd.generate(10),
      profilePicture: "",
      coverPicture: "",
      city: "Khartoum",
      from: "sudan",
    });

    assert.ok(data._id != undefined);
    assert.equal(data.firstName, user);
  });
});

it(" should post", async () => {
  try {
    const { data } = await axios.post("/post", {
      userId: "6237204cc176dd1fd61f97cc",
      desc: "3 post from mubsher ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSx_pNgJK6SvMBQQpzROoUuzX-Hdq-a47Cw&usqp=CAU",
    });
  } catch (e) {
    assert.equal(e.response.data, "cannot post");
  }
});
