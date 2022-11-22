import React, { useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./styles/Preview.scss";

function Preview({ markdown }) {
  const htmlString = DOMPurify.sanitize(marked.parse(markdown));

  useEffect(() => {
    document.querySelectorAll(".preview > table").forEach((element) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("table-wrapper");
      element.before(wrapper);
      wrapper.append(element);
    });

    return () => {};
  }, [htmlString]);
  return (
    <div className="preview-container">
      <h2>Output</h2>
      <div className="preview" id="preview" dangerouslySetInnerHTML={{ __html: htmlString }}></div>
    </div>
  );
}

export default Preview;
