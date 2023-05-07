import React, { useState } from 'react';
import './chat.css';

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleMessageSubmit = (event) => {
        event.preventDefault();
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-box">
            <div className="chat-box-header">
                <h2>Chat Box</h2>
            </div>
            <div className="chat-box-messages">
                {messages.map((message, index) => (
                    <div key={index} className="chat-box-message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="chat-box-footer">
                <form onSubmit={handleMessageSubmit}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(event) => setNewMessage(event.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ChatBox;
