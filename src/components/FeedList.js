import React from "react";
import SocialCard from "./social-card";

export default function FeedList() {
  const propsArray = [
    {
      userName: "Kurt Vestergaard",
      datePosted: "18 september, 2020",
      postText: "Bomber i turbanen!",
      profilePictireURL: "https://picsum.photos/200",
      postImage: "https://picsum.photos/300",
    },
    {
      userName: "Børge Johansen",
      datePosted: "9 september, 2020",
      postText:
        "Kæææmpe rant. Nu siger jeg bare alt muligt mærkeligt! Det må man vel godt når man er i min alder. Alle de unge burde skamme sig!",
      profilePictireURL: "https://picsum.photos/200",
      postImage: "https://picsum.photos/400",
    },
    {
      userName: "Carl Hansen",
      datePosted: "4 september, 2020",
      postText:
        "Jaja, I dig er det min dejlige hustrus fødselsdag. Glædeligt tillykke og det bliver godt til Kandis koncert!",
      profilePictireURL: "https://picsum.photos/200",
      postImage: "https://picsum.photos/400",
    },
  ];

  return (
    <div>
      {propsArray.map((propsArrayItem) => (
        <SocialCard {...propsArrayItem} />
      ))}
      {/* <SocialCard {...propsArray[0]} /> */}
    </div>
  );
}
