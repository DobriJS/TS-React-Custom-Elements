import { Message } from "../context/logger-context";

export type TileListItemProps = {
    message: Message;
    removeMessage: (message: Message) => void;
};