import React from "react";
import reactDom from "react-dom";

function Card(props) {
  <h1>My Contacts</h1>;
  return (
    <div>
      <h2> {props.name}</h2>
      <img src={props.img} alt="avatar_img" />

      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

reactDom.render(
  <div>
    <h1>MY CONTACT </h1>
    <Card
      name="MONA lisa"
      img="https://ih1.redbubble.net/image.694518903.3043/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="computers"
      img="https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-63.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);
