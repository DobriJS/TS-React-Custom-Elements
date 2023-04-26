import { TileListItemProps } from '../../types/TileListItem';

const TileListItem: React.FC<TileListItemProps> = ({ message, removeMessage }) => {
  return (
    <>
      <span>{message.message}</span>
      <button
        className='rounded-md mt-2 mb-1 text-center bg-blue-400 px-4 w-full'
        data-testid='remove'
        onClick={() => removeMessage(message)}
      >
        Remove
      </button>
    </>
  );
};

export default TileListItem;
