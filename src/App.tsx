import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import { ErrorLoggerContext, Message } from './context/logger-context';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const addMessage = (message: Message) => {
    setMessages((oldMessages: Message[]) => {
      const copy = [...oldMessages];
      copy.unshift(message);
      return copy;
    });
  };

  const stopMessage = () => setIsRunning(false);
  const startMessage = () => setIsRunning(true);
  const clearMessage = () => setMessages([]);

  const removeMessage = (message: Message) => {
    setMessages((oldMessages: Message[]) => {
      const copy = [...oldMessages];
      const finalMessages = copy.filter((item: Message) => {
        return !(item.priority === message.priority && item.message === message.message);
      });
      return finalMessages;
    });
  };

  return (
    <ErrorLoggerContext.Provider
      value={{
        messages,
        isRunning,
        addMessage,
        removeMessage,
        stopMessage,
        startMessage,
        clearMessage
      }}
    >
      <Dashboard />
    </ErrorLoggerContext.Provider>
  );
};

export default App;
