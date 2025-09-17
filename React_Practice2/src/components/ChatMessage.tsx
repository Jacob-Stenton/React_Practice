interface MessageProps {
  message: string;
  user: string;
}

const ChatMessage = ({ message, user }: MessageProps) => {
  return (
    <div
      className={user === "Jacob" ? "chat-message-jacob" : "chat-message-maddy"}
    >
      <div className="message-user-name">{user}</div>
      <div className="user-message">{message}</div>
    </div>
  );
};

export default ChatMessage;
