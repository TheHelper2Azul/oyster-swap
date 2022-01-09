import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
           Azul's DeFi DEX
        </div>
      </div>
      <Routes />
      <div className="social-buttons">
        <GitHubButton
          href="https://twitter.com/eremod"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count={true}
          aria-label="Follow Azul on Twitter"
        >
          Star
        </GitHubButton>
      
      </div>
    </div>
  );
}

export default App;
