import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from '../reducer/character';
import { fetchEpisode } from '../reducer/episode';
import { fetchLocation } from '../reducer/location';
import { RootState } from '../interface';
import { characterType } from '../types';
import Character from '../component/Character';
import Pagination from '../component/Pagination';
import styled from 'styled-components';

const Header = styled.div`
  background: #fff;
  color: #333;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`;

const Container = styled.div`
  background: #24282f;
  padding: 4.5rem 2.5rem;
`;

const Footer = styled.div`
  background: #4e535c;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  padding: 10px 0;
`;

let PageSize = 10;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const characterData = useSelector((state: RootState) => state.character.characters);
  const loading = useSelector((state: RootState) => state.character.loading);
  const error = useSelector((state: RootState) => state.character.error);
  const [currentPage, setCurrentPage] = useState(1);

  const getCharacter = () => {
    dispatch(fetchCharacter(currentPage) as any);
  };
  const getLocation = () => {
    dispatch(fetchEpisode() as any);
  };
  const getEpisode = () => {
    dispatch(fetchLocation() as any);
  };
  useEffect(() => {
    getCharacter();
    getLocation();
    getEpisode();
  }, []);

  useEffect(() => {
    getCharacter();
  }, [currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error}</div>;
  }

  return (
    <>
      <Header>The Rick and Morty API</Header>
      <Container>
        {characterData &&
          characterData.map((character: characterType, i) => {
            return (
              <div key={i}>
                <Character characterData={character} />
              </div>
            );
          })}
        <Pagination
          currentPage={currentPage}
          totalCount={400}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </Container>
      <Footer>All right reserved</Footer>
    </>
  );
};

export default Home;
