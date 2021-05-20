import './WelcomePage.css';
import { ChangeEvent, useState } from 'react';

export const WelcomePage = () => {
  const [name, setName] = useState('');

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>React Redux Memory Game</h1>
        <h4>Just memorize position of cards and remove their pairs</h4>
      </header>
      <input type="text" className="form-control" placeholder="input your name" value={name} onChange={handleChange} />
      <button className="btn btn-info">LET'S PLAY</button>
    </div>
  );
};
