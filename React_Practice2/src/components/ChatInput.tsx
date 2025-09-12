import React from "react";

interface Props {
  onSend: (message: string) => void;
}

const ChatInput = ({ onSend }: Props) => {
  const [message, setMessage] = React.useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <>
      <input
        name="chatInput"
        value={message}
        placeholder="Type message here"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        size={40}
      />
      <button onClick={handleSend}>send</button>
    </>
  );
};

export default ChatInput;
