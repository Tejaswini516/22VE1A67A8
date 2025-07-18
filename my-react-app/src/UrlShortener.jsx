import React, { useState } from "react";

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    if (!longUrl.startsWith("http")) {
      alert("Please enter a valid URL starting with http or https");
      return;
    }

    // Mock short URL logic (replace this with backend call)
    const randomId = Math.random().toString(36).substring(2, 8);
    const shortened = https;//short.ly/${randomId};
    setShortUrl(shortened);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter long URL..."
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        className="w-full p-3 rounded-xl border mb-4"
      />
      <button
        onClick={handleShorten}
        className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
      >
        Shorten URL
      </button>

      {shortUrl && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl flex items-center justify-between">
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {shortUrl}
          </a>
          <button onClick={handleCopy} className="ml-2 text-sm text-purple-600 hover:underline">
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;