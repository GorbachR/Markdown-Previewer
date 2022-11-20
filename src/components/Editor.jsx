import React from "react";
import "./styles/Editor.scss";

function Editor({ markdown, setMarkdown }) {
  function onMarkdownChange(e) {
    setMarkdown(e.target.value);
  }
  return (
    <div className="editor">
      <textarea
        name="markdown"
        id="editor"
        cols="50"
        rows="20"
        value={markdown}
        onChange={onMarkdownChange}
      ></textarea>
    </div>
  );
}

export default Editor;
