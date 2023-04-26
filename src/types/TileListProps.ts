import { Message } from "./Message";

export type TileListProps = {
    messages: Message[];
    type: number;
    removeMessage: (message: Message) => void;
};