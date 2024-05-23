import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import { setupWebSocket } from "./utils/websocket";

const queryClient = new QueryClient();

const AppContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

interface Message {
  message: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const ws = setupWebSocket((data) => {
      if (data.type === "init") {
        setMessages(data.messages);
      } else if (data.type === "new_message") {
        setMessages((prevMessages) =>
          [...prevMessages, { message: data.message }].slice(-9)
        );
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Title>Message App</Title>
        <MessageInput />
        <MessageList messages={messages} setMessages={setMessages} />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
