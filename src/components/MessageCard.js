import React from "react";

const MessageCard = (props) => {
  let { key, id, name, message } = props;
  return (
    <div className="tc bg-dark-green dib br3 pa3 ma2 bw2 shadow-5 grow">
      {/* <img src={url} alt="person-image" /> */}
      <h3 className="white">{name}</h3>
      <p className="white">{message}</p>
    </div>
  );
};

export default MessageCard;
