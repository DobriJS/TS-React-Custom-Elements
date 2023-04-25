import { Message, Priority } from '../../context/logger-context';
import TileListItem from './TileListItem';

type TileListProps = {
  messages: Message[];
  type: number;
  removeMessage: (message: Message) => void;
};

const TileList: React.FC<TileListProps> = ({ messages, type, removeMessage }) => {
  const getClassType = (index: number) => {
    if (Priority.Error === index) {
      return 'bg-error p-2 m-1';
    } else if (Priority.Warn === index) {
      return 'bg-warn p-2 m-1';
    } else if (Priority.Info === index) {
      return 'bg-info p-2 m-1';
    }
  };
  const getLabel = (index: number) => {
    if (Priority.Error === index) {
      return 'Error';
    } else if (Priority.Warn === index) {
      return 'Warning';
    } else if (Priority.Info === index) {
      return 'Info';
    }
  };

  return (
    <div className='p-2 mx-2'>
      <h2>
        {getLabel(type)} {type}
      </h2>
      <h3>Messages {messages.length}</h3>
      {messages.map((i: Message, index: number) => {
        return (
          <div className={getClassType(type)} key={index}>
            <TileListItem message={i} removeMessage={removeMessage} />
          </div>
        );
      })}
    </div>
  );
};

export default TileList;
