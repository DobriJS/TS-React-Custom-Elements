import { Message } from "../context/logger-context";

export type TileListProps = {
    messages: Message[];
    type: number;
    removeMessage: (message: Message) => void;
};