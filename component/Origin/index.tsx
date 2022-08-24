import React from 'react';
import { IOrigin } from './origin';
import { originType } from '../../types';
import styled from 'styled-components';

const OriginContainer = styled.div``;

const Item = styled.div`
  font-size: 0.9rem;
  strong {
    padding-right: 5px;
  }
`;

const Origin: React.FC<IOrigin.IProps> = ({ originURL, originData }) => {
  const filteredLocation = originData.filter((t: originType) => t.url === originURL);

  return (
    <>
      {filteredLocation.length > 0 &&
        filteredLocation.map((item: originType, i) => {
          return (
            <OriginContainer key={i}>
              <h3>Origin information</h3>
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
            </OriginContainer>
          );
        })}
    </>
  );
};

export default Origin;
