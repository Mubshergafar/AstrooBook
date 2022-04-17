import React from "react";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import EventIcon from "@mui/icons-material/Event";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import SchoolIcon from "@mui/icons-material/School";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={RssFeedIcon} title="Feed" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={GroupIcon} title="Groups " />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos " />
      <SidebarRow Icon={WorkOutlinedIcon} title="Jobs " />
      <SidebarRow Icon={ChatIcon} title="Messenger " />
      <SidebarRow Icon={BookmarkOutlinedIcon} title="Bookmarks " />
      <SidebarRow Icon={HelpOutlinedIcon} title="Questions " />
      <SidebarRow Icon={SchoolIcon} title="Courses" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
