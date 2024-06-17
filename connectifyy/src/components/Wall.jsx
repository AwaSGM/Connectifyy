// src/components/Wall.js


import React, { useState } from 'react';

const Wall = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="wall">
      <h2>My Walls</h2>
      {messages.map((message, index) => (
        <div key={index} className="post">
          <div className="post-header">
            <span>Message {index + 1}</span>
          </div>
          <div className="post-content">
            <p>{message}</p>
          </div>
        </div>
      ))}
      <div className="message-input">
        <input
          type="text"
          placeholder="Écrivez un message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Wall;
