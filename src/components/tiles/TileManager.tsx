import { useContext, useEffect } from 'react';
import { ErrorLoggerContext, Message } from '../../context/logger-context';
import generateMessage, { Priority } from '../../api';
import TileList from './TileList';

const TileManager: React.FC = () => {
  const { messages, isRunning, addMessage, removeMessage } = useContext(ErrorLoggerContext);

  useEffect(() => {
    const stream = generateMessage((message: Message) => {
      if (isRunning) {
        addMessage(message);
        // notify
      }
    });
    return stream;
  }, [isRunning]);

  const warningMessage = messages.filter((message: Message) => message.priority === Priority.Warn);
  const errorMessage = messages.filter((message: Message) => message.priority === Priority.Error);
  const infoMessage = messages.filter((message: Message) => message.priority === Priority.Info);

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        <TileList messages={warningMessage} type={Priority.Warn} removeMessage={removeMessage} />
        <TileList messages={errorMessage} type={Priority.Error} removeMessage={removeMessage} />
        <TileList messages={infoMessage} type={Priority.Info} removeMessage={removeMessage} />
      </div>
    </div>
  );
};

export default TileManager;
