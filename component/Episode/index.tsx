import React, { useMemo } from 'react';
import { IEpisode } from './episode';
import { episodeType } from '../../types';
import styled from 'styled-components';

const EpisodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #fff;
  padding-top: 15px;
  h4 {
    width: 100%;
  }
`;

const Item = styled.div`
  font-size: 0.9rem;
  span {
    padding-right: 8px;
  }
`;

const Episode: React.FC<IEpisode.IProps> = ({ characterURL, episodeData }) => {
  const episodeArray = episodeData.filter((obj: episodeType) =>
    obj.characters.find((item: string) => item === characterURL),
  );

  return (
    <EpisodeContainer>
      <h4>Name of the chapters the character is featured on</h4>
      {episodeArray.length > 0 ? (
        episodeArray.map((item: episodeType, i) => {
          return (
            <Item data-testid="episode-name" key={i}>
              <span>{item.name}</span>
            </Item>
          );
        })
      ) : (
        <div>No chapter found</div>
      )}
    </EpisodeContainer>
  );
};

export default Episode;
