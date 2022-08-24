import React from 'react';
import { ICharacter } from './charecter';
import Location from '../Location';
import Episode from '../Episode';
import Origin from '../Origin';
import { useSelector } from 'react-redux';
import { RootState } from '../../interface';
import styled from 'styled-components';

const CharachterCard = styled.article`
  width: 100%;
  height: 260px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  h3,
  h4 {
    margin: 0;
    color: #9e9e9e;
  }
`;

const ChCardBody = styled.div``;
const ChHeader = styled.div`
  display: flex;
  > div {
    flex: 0.33;
  }
`;

const ChInfoContainer = styled.div`
  flex: 3 1 0%;
  position: relative;
  margin: 1.5rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`;

const ChCardImg = styled.div`
  flex: 2 1 0%;
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  > img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
  }
`;

const Item = styled.div`
  font-size: 0.9rem;
  strong {
    padding-right: 5px;
  }
`;

const Character: React.FC<ICharacter.IProps> = ({ characterData }) => {
  const { name, species, image, status, gender, location, origin, url, type } = characterData;
  const episodeData = useSelector((state: RootState) => state.episode.episodes);
  const locationData = useSelector((state: RootState) => state.location.locations);

  return (
    <CharachterCard>
      <ChCardImg>{image && <img src={image} alt="character-image" />}</ChCardImg>
      <ChInfoContainer>
        <ChHeader>
          <ChCardBody>
            <h3>Character information</h3>
            {name && (
              <Item data-testid="character-name">
                <strong>Name:</strong>
                <span>{name}</span>
              </Item>
            )}
            {status && (
              <Item data-testid="character-status">
                <strong>Status:</strong>
                <span>{status}</span>
              </Item>
            )}
            {species && (
              <Item data-testid="character-species">
                <strong>Species:</strong>
                <span>{species}</span>
              </Item>
            )}
            {type && (
              <Item data-testid="character-type">
                <strong>Type:</strong>
                <span>{type}</span>
              </Item>
            )}
            {gender && (
              <Item data-testid="character-gender">
                <strong>Gender:</strong>
                <span>{gender}</span>
              </Item>
            )}
          </ChCardBody>
          <Origin originURL={origin.url} originData={locationData} />
          <Location locationURL={location.url} locationData={locationData} />
        </ChHeader>
        <Episode characterURL={url} episodeData={episodeData} />
      </ChInfoContainer>
    </CharachterCard>
  );
};

export default Character;
