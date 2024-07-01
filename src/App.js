import React from 'react';
import { getCardsSOR, getCardsSOROP } from "./getCards.js";

function App() {
  return (
    <>
      <h1>Hello!</h1>
      <ul>
        <li>SOR has {getCardsSOR().data.length} cards</li>
        <li>SOROP has {getCardsSOROP().data.length} cards</li>
      </ul>
    </>
  );
}

export default App;