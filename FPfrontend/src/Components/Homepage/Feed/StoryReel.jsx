import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        className="storyReel__story"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-Z9XMq_2yr5bah72jdsK8Ts4Q5Xisv41yQ&usqp=CAU"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQEgBuKGcL190A/profile-displayphoto-shrink_200_200/0/1605386398974?e=1651708800&v=beta&t=nrm71JJb-sHtD5cu3VpFb_RfrJVwfchp0fG-0n5Dp-M"
        title="Omer Mohamed"
      />
      <Story
        className="storyReel__story"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z0d_Jke01v4ErGgNeyx8ROBp-v0TW3ZxBg&usqp=CAU"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQE4dNIT6C59xQ/profile-displayphoto-shrink_200_200/0/1615306195889?e=1651708800&v=beta&t=g9GgMLqHrdFdsm3ClK48XC_oTsATL_8K4_dIR7Ys_VY"
        title="Hussain abdalkarem"
      />
      <Story
        className="storyReel__story"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&usqp=CAU"
        profileSrc="https://img.okadoc.com/plain/200x200/photos/practitioner/photo/109244/okadoc-doctor-clinical-dietitian-samah-omer-mohammed-al-tayb-20200217072316.jpg"
        title="Hussan Abdalkarem"
      />
      <Story
        className="storyReel__story"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY95UhkstNxCXNVyK9h3-aSBvrN8IbC6jjIA&usqp=CAU"
        title="Magdad Ahmed"
      />
      <Story
        className="storyReel__story"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKj04PI85zVnVmDsQvIMwUkqGqmh5o02g_Q&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResI45eoMEfg44KW6SQmApjTi_5cn8mueKow&usqp=CAU"
        title="Awab Alfadel"
      />
    </div>
  );
}

export default StoryReel;
