import React from "react";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";




function App() {
  const [chatMessageHistory, setChatMessageHistory] = React.useState([
    {
      message: "Hello",
      user: "Jacob",
      id: crypto.randomUUID(),
    },
    {
      message: "Hi!",
      user: "Maddy",
      id: crypto.randomUUID(),
    },
    {
      message: "What's up?",
      user: "Maddy",
      id: crypto.randomUUID(),
    },
    {
      message: "Nothing much u?",
      user: "Jacob",
      id: crypto.randomUUID(),
    },
    {
      message: "NOTHING!",
      user: "Maddy",
      id: crypto.randomUUID(),
    },
    {
      message: "damnnnn",
      user: "Jacob",
      id: crypto.randomUUID(),
    },
  ]);

  return (
    <>
      <ChatHistory chats={chatMessageHistory} />
      <ChatInput />
    </>
  );
}

export default App;
