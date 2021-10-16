import React, { useState } from 'react';

const Chat = ({ name }) => {
  const [messages, setMessages] = useState([
    {
      name: '管理人',
      text: `welcome, ${name}`,
    },
  ]);

  const [text, setText] = useState('');
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
