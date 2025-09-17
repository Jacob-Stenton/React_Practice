import React, { useRef } from "react";
import ChatMessage from "./ChatMessage";

interface Chat {
  id: string | number;
  message: string;
  user: string;
}

interface Props {
  chats: Chat[];
}

const ChatHistory = ({ chats }: Props) => {
  const chatMessagesRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="chat-history-container" ref={chatMessagesRef}>
      {chats.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            user={chatMessage.user}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
};

export default ChatHistory;
