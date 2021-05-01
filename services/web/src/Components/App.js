import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Chat from "../Components/chatbot/ChatNormal";
import { AccessTokenProvider } from "../Contexts/AccessToken";

import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <AccessTokenProvider>
        <Routes />
      </AccessTokenProvider>
      <Chat />
    </Router>
  );
};

export default App;
