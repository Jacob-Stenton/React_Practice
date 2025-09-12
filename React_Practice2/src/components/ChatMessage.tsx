interface MessageProps {
  message: string;
  user: string;
}

const ChatMessage = ({ message, user }: MessageProps) => {
  return (
    <div>
      <h1>{user}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
