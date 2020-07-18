import React from "react";
import MessageCard from "../components/MessageCard";

const MessageBoard = ({ messages }) => {
  const cards = messages.map((message) => {
    return (
      <MessageCard
        className="pa6"
        key={message.id}
        id={message.id}
        name={message.name}
        message={message.message}
      />
    );
  });
  return <div>{cards}</div>;
};

export default MessageBoard;
