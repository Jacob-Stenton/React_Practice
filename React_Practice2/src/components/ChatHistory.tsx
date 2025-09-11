import ChatMessage from "./ChatMessages";

interface Chat {
  id: string | number;
  message: string;
  user: string;
}

interface Props {
  chats: Chat[];
}

const ChatHistory = ({ chats }: Props) => {
  return (
    <>
      {chats.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            user={chatMessage.user}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
};

export default ChatHistory;
