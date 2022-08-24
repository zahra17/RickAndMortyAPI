import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Location from '.';
import JestProvider from '../../hook/JestProvider';

const url = 'https://rickandmortyapi.com/api/location/20';
const locationData = [
  {
    id: 1,
    name: 'Earth',
    type: 'Planet',
    dimension: 'Dimension C-137',
    residents: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      // ...
    ],
    url: 'https://rickandmortyapi.com/api/location/1',
    created: '2017-11-10T12:42:04.162Z',
  },
];

test('Render location Item', () => {
  render(<Location locationURL={url} locationData={locationData} />, { wrapper: JestProvider });

  const locationName = screen.queryByTestId('location-name');
  expect(locationName).not.toBeInTheDocument();

  const locationType = screen.queryByTestId('location-type');
  expect(locationType).not.toBeInTheDocument();

  const locationDimension = screen.queryByTestId('location-dimension');
  expect(locationDimension).not.toBeInTheDocument();

  const locationResidents = screen.queryByTestId('location-residents');
  expect(locationResidents).not.toBeInTheDocument();
});
