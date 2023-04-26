# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

### `npm run build`

### `npm run eject`

## Learn More
React-based application that manages and displays messages with different priorities in a tile format. The project uses a message generator to generate messages with random priorities and intervals, which are then displayed in the Tile Manager UI.

### File Structure
The project consists of several files, including:
- TileManager.tsx: This file contains the main component of the Tile Manager application. It generates a stream of messages using the generateMessage function and adds them to the message list using the addMessage function.
- index.ts: This file contains the message generator function that generates messages with random priorities and intervals. It uses the subscriber.next function to add the generated messages to the message list.
- App.tsx: This file contains the App component that renders the Tile Manager UI. It receives the message list as a prop and updates it using the addMessage function.
- TileList.tsx: This file contains the TileList component that renders the list of tiles. It receives the message list as a prop and maps each message to a TileListItem component.


