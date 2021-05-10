import React from "react";
import Card from "./Card";
import CardMeta from "./CardMeta";

const userData = {
  name: "Chis Coyler",
  age: 30,
  hobby: "Singing",
  eats: "Everything",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UUD5_QfP3HFFTjOPEorII-S6WK-0Ux7GUQ&usqp=CAU",
  twitter: "https://twitter.com/user",
};

export default function Exercise() {
  return (
    <Card>
      <img
        style={{ width: "100%", height: 300, objectFit: "cover" }}
        src={userData.image}
        alt="Card profile"
      />

      <h1 style={{ color: "#218eff", fontWeight: "bold" }}>{userData.name}</h1>

      <CardMeta title="Age" content={userData.age} />
      <CardMeta title="Hobby" content={userData.hobby} />
      <CardMeta title="Eats" content={userData.eats} />
      <CardMeta
        title="Twitter"
        content={
          <a href={userData.twitter} target="_blank">
            @{userData.name}
          </a>
        }
      />
    </Card>
  );
}
