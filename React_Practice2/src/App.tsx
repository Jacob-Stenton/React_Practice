import React from "react";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import "./App.css";

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

  function addMessage(message: string) {
    setChatMessageHistory((prevChats) => [
      ...prevChats,
      {
        id: crypto.randomUUID(),
        message,
        user: "Jacob",
      },
    ]);
  }

  return (
    <div className="app-container">
      <ChatHistory chats={chatMessageHistory} />
      <ChatInput onSend={addMessage} />
    </div>
  );
}

export default App;
