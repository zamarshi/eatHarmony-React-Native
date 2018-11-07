import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "./app.js";
import Chats from "./chat.js";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 60 }}>
      <Scene key="index" title="eatHarmony">
        <Scene key="main" component={App} title="👫 eatHarmony 🍷" />
        <Scene key="messages" component={Chats} title=" Chats " />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
