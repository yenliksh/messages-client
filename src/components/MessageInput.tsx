import React, { useState } from "react";
import styled from "styled-components";
import { useMessages } from "../hooks/useMessages";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const { mutation } = useMessages();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(message);
    setMessage("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default MessageInput;
