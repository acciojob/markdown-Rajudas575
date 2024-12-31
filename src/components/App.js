import React, { useState, useEffect } from "react";
import './../styles/App.css';


const parseMarkdown = (markdown) => {
  let html = markdown
    .replace(/^# (.*$)/gim, "<h1>$1</h1>") // H1
    .replace(/^## (.*$)/gim, "<h2>$1</h2>") // H2
    .replace(/^### (.*$)/gim, "<h3>$1</h3>") // H3
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // Bold
    .replace(/\*(.*)\*/gim, "<i>$1</i>") // Italic
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />') // Images
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>') // Links
    .replace(/\n$/gim, "<br>"); // Line breaks

  return html.trim();
};


const App = () => {
  const [texttype, setTextType] = useState("");
  const [htmlPreview, setHtmlPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer); 
  }, []);

  // Update the HTML preview whenever markdown changes
  useEffect(() => {
    const parsedHtml = parseMarkdown(markdown);
    setHtmlPreview(parsedHtml);
  }, [markdown]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <textarea
        className="textarea"
        placeholder="Write your markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      ></div>
    </div>
  );
};

export default App;
