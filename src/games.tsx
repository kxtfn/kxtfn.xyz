import React from 'react';

const Games: React.FC = () => {
  const games: string[] = [
    'GTA V',
    'Minecraft',
    'Risk of Rain 2',
    'Dark Souls',
    'Lies of P',
    'Dying Light',
  ];

  return (
    <ul>
      {games.map((game, index) => (
        <li key={index}>{game}</li>
      ))}
    </ul>
  );
};

export default Games;