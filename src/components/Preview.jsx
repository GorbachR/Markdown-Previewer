import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./styles/Preview.scss";

function Preview({ markdown }) {
  const htmlString = DOMPurify.sanitize(marked.parse(markdown));
  return (
    <div className="preview" id="preview" dangerouslySetInnerHTML={{ __html: htmlString }}></div>
  );
}

export default Preview;
