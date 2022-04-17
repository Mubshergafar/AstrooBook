import "./profile.css";
import Sidebar from "../Homepage/Sidebar/Sidebar";
import Feed from "../Homepage/Feed/Feed";
import Widgets from "../Homepage/Widgets/Widgets";
import Header from "../Homepage/Header/Header";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5aono6g9q3O9dhbnwPELHjg6uiIQaFm5Bg&usqp=CAU"
                alt=""
              />

              <img
                className="profileUserImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxodrNhTFgyMHfsBvu2UZXHVot9RW5ZjALdQ&usqp=CAU"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">
                {user.firstName} {user.lastName}
              </h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Widgets />
          </div>
        </div>
      </div>
    </>
  );
}
