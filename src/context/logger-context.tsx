import { createContext } from 'react';
import { Message } from '../types/Message';

export type ErrorLoggerContextState = {
  messages: Message[];
  isRunning: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (message: Message) => void;
  clearMessage: () => void;
  stopMessage: () => void;
  startMessage: () => void;
};

const contextDefaultValues: ErrorLoggerContextState = {
  messages: [],
  isRunning: false,
  addMessage: () => {},
  removeMessage: () => {},
  clearMessage: () => {},
  stopMessage: () => {},
  startMessage: () => {}
};

export const ErrorLoggerContext = createContext<ErrorLoggerContextState>(contextDefaultValues);
