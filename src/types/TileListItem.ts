import { Message } from "./Message";

export type TileListItemProps = {
    message: Message;
    removeMessage: (message: Message) => void;
};