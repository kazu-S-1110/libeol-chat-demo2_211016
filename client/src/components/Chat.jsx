import React, { useRef, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Message from './Message';

const Chat = ({ name }) => {
  const [messages, setMessages] = useState([
    {
      name: '管理人',
      text: `welcome, ${name}`,
    },
  ]);

  const [text, setText] = useState('');

  const socketRef = useRef();

  useEffect(() => {
    console.log('connecting...');
    socketRef.current = io();
    socketRef.current.on('broadcast', (payload) => {
      console.log('Received: ' + payload);
      setMessages((prevMessages) => [...prevMessages, payload]);
    });
    return () => {
      console.log('Disconnecting...');
      socketRef.current.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = (e) => {
    const aMessage = {
      name: name,
      text: text,
    };
    socketRef.current.emit('send', aMessage);
    setMessages((prevMessages) => [...prevMessages, aMessage]);
    setText('');
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="message"
          value={text}
          onChange={handleInputChange}
        />
        <button disabled={!text} onClick={handleButtonClick}>
          Submit
        </button>
      </div>
      <ul>
        {messages.map((msg, index) => {
          return <Message key={index} name={msg.name} text={msg.text} />;
        })}
      </ul>
    </>
  );
};

export default Chat;
