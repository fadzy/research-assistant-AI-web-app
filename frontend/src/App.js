import React, { useState } from "react";
import axios from "axios";
import './index.css';


function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleSummarize = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/summarize/", { text });
      setSummary(response.data.summary);
      setKeywords(response.data.keywords);
    } catch (error) {
      console.error("Error summarizing text:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-green-300 to-purple-400 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Research Assistant AI </h1>
      <textarea
        className="w-full max-w-2xl p-4 border-2 border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="10"
        placeholder="Paste your research paper or large text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="mt-6 bg-indigo-600 text-white text-lg px-6 py-3 rounded-lg shadow-xl hover:bg-indigo-700 transition"
        onClick={handleSummarize}
      >
        Summarize & Extract Keywords
      </button>
      {summary && (
        <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Summary:</h2>
          <p className="text-gray-800">{summary}</p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Keywords:</h2>
          <p className="text-gray-700">{keywords.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
