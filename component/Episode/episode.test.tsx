import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JestProvider from '../../hook/JestProvider';
import Episode from '.';

const url = 'https://rickandmortyapi.com/api/character/1';

const episodeData = [
  {
    id: 1,
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'S01E01',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      //...
    ],
    url: 'https://rickandmortyapi.com/api/episode/1',
    created: '2017-11-10T12:56:33.798Z',
  },
];

test('Render episode Item', () => {
  render(<Episode characterURL={url} episodeData={episodeData} />, { wrapper: JestProvider });

  const episodeName = screen.queryByTestId('episode-name');
  expect(episodeName).toBeInTheDocument();
});
