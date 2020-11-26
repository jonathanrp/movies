import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
import Card from '../Card';

const List = ({ items }) => {
  return (
    <styles.List>
      {items && items.map((item, index) => {
          return (
            <Card
              key={item.id}
              title={item.original_title}
              overview={item.overview}
              releaseDate={item.release_date}
              voteAverage={item.vote_average}
              poster={`${config.image_path}${item.poster_path}`}
            />
          );
        })}
    </styles.List>
  )
};

const styles = {};

styles.List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default List;