import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "./styles/App.scss";

const App = () => {
  const [markdown, setMarkdown] = useState(require("./json/superlongstring.json"));

  return (
    <div className="app">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default App;
