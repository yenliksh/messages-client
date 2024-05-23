import React from "react";
import styled from "styled-components";
import { useMessages } from "../hooks/useMessages";

interface Message {
  message: string;
}

interface MessageListProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #f0f0f0;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
`;

const MessageList: React.FC<MessageListProps> = ({ messages, setMessages }) => {
  const { messages: fetchedMessages } = useMessages();

  return (
    <List>
      {fetchedMessages.map((msg, index) => (
        <ListItem key={index}>{msg.message}</ListItem>
      ))}
    </List>
  );
};

export default MessageList;
