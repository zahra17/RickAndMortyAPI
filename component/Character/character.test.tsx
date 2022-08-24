import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JestProvider from '../../hook/JestProvider';
import Character from '.';

jest.mock('../Episode', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

jest.mock('../Location', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

const character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    // ...
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

test('Render character Item', () => {
  render(<Character characterData={character} />, { wrapper: JestProvider });

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
  expect(image).toHaveAttribute('alt', 'character-image');

  const characterName = screen.getByTestId('character-name');
  expect(characterName).toBeInTheDocument();

  const characterStatus = screen.getByTestId('character-status');
  expect(characterStatus).toBeInTheDocument();

  const characterSpecies = screen.getByTestId('character-species');
  expect(characterSpecies).toBeInTheDocument();

  const characterType = screen.queryByTestId('character-type');
  expect(characterType).not.toBeInTheDocument();

  const characterGender = screen.getByTestId('character-gender');
  expect(characterGender).toBeInTheDocument();
});
