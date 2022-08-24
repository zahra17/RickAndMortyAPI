import React from 'react';
import { ILocation } from './location';
import { locationType } from '../../types';
import styled from 'styled-components';

const LocationContainer = styled.div``;

const Item = styled.div`
  font-size: 0.9rem;
  strong {
    padding-right: 5px;
  }
`;

const Location: React.FC<ILocation.IProps> = ({ locationURL, locationData }) => {
  const filteredLocation = locationData.filter((t: locationType) => t.url === locationURL);

  return (
    <>
      {filteredLocation.length > 0 &&
        filteredLocation.map((item: locationType, i) => {
          return (
            <LocationContainer key={i}>
              <h3>Location information</h3>
              {item.name && (
                <Item data-testid="location-name">
                  <strong>Name:</strong>
                  <span>{filteredLocation[0].name}</span>
                </Item>
              )}
              {item.type && (
                <Item data-testid="location-type">
                  <strong>Type:</strong>
                  <span>{item.type}</span>
                </Item>
              )}
              {item.dimension && item.dimension !== 'unknown' && (
                <Item data-testid="location-dimension">
                  <strong>Dimension:</strong>
                  <span>{item.dimension}</span>
                </Item>
              )}
              {item.residents.length > 0 && (
                <Item data-testid="location-residents">
                  <strong>Amount of residents:</strong>
                  <span>{item.residents.length}</span>
                </Item>
              )}
            </LocationContainer>
          );
        })}
    </>
  );
};

export default Location;
