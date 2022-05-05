import React from "react";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes/routes";

const App = () => {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}

export default App;