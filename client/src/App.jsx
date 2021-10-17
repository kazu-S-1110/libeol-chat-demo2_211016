import React, { useState } from 'react';
import Chat from './components/Chat';
import { Operation } from './components/Operation';

const App = () => {
  const [entered, setEntered] = useState(false);
  const [name, setName] = useState('');

  const handleEnter = (name) => {
    setEntered(true);
    setName(name);
  };

  const handleLeave = () => {
    setEntered(false);
  };

  return (
    <>
      <Operation
        onEnter={handleEnter}
        onLeave={handleLeave}
        entered={entered}
      />
      {entered && <Chat name={name} />}
    </>
  );
};

export default App;
