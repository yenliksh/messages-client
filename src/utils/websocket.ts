export const setupWebSocket = (onMessage: (data: any) => void) => {
  const ws = new WebSocket(`${process.env.REACT_APP_WS_URL}`);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  return ws;
};
