// If there are any functions or variables to export, export them here
export const fetchMessages = async (): Promise<string[]> => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/messages`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const postMessage = async (message: string) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
};

// Add this line to ensure the file is treated as a module
export {};
