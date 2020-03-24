import React from "react";

import "./resources/css/reset.css";
import "./resources/css/styles.css";

import Header from "./pages/layout/Header";
import Content from "./pages/layout/Content";
import MentionLegale from "./components/MentionLegale";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="wrapper">
        <Content />
        <MentionLegale />
      </div>
    </div>
  );
}

export default App;
