import React, { useState } from 'react';

export const Operation = ({ entered, onEnter, onLeave }) => {
  const [name, setName] = useState('');
  const handleInputChange = (e) => setName(e.target.value);
  const handleEnterClick = () => onEnter(name);

  return (
    <div className="input">
      <input
        type="text"
        placeholder="name"
        value={name}
        disabled={entered}
        onChange={handleInputChange}
      />
      {entered ? (
        <>
          <button onClick={onLeave}>Leave this room</button>
        </>
      ) : (
        <button disabled={!name} onClick={handleEnterClick}>
          Enter room
        </button>
      )}
    </div>
  );
};
