import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchMessages = async (): Promise<{ message: string }[]> => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/messages`);
  return res.json();
};

const postMessage = async (message: string) => {
  await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
};

export const useMessages = () => {
  const queryClient = useQueryClient();

  const { data: messages = [] } = useQuery("messages", fetchMessages);

  const mutation = useMutation(postMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  return { messages, mutation };
};
