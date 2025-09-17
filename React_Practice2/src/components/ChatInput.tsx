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
    <div className="input-container">
      <input
        name="chatInput"
        className="chat-input"
        value={message}
        placeholder="Type message here"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button className="send-button" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
