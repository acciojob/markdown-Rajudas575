import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  // useState hook to keep track of the markdown text
  const [texttype, setTextType] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHtmlPreview(texttype);
      // setHtmlPreview(convertMarkdownToHtml(markdown));
    }, 500);

    return () => clearTimeout(timer);
  }, [texttype]);

return (
    <div className="app">
      <div className="container">
        <div className="textarea-section">
          <textarea
            className="textarea"
            placeholder="Write your markdown here..."
            value={texttype}
            onChange={(e) => {
              setIsLoading(true);
              setTextType(e.target.value);
            }}
          />
        </div>

        <div className="preview-section">
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div
              className="preview"
              dangerouslySetInnerHTML={{ __html: htmlPreview }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
