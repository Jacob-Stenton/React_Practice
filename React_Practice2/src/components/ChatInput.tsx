import React from "react";

interface Props {
  handleSendMessage: () => string;
}

const ChatInput = ({ handleSendMessage }: Props) => {
  const [message, setMessage] = React.useState("");

  return (
    <>
      <input
        name="chatInput"
        placeholder="Type message here"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        size={40}
      />
      <button onClick={handleSendMessage}>send</button>
    </>
  );
};

export default ChatInput;
