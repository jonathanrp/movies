import React from 'react';
import styled from 'styled-components';
import config from '../../../config';
import Card from '../Card';

const List = ({ items }) => {
  return (
    <styles.List>
      {items && items.map((item, index) => {
          let poster;
          if (item.poster_path) {
            poster = config.image_path + item.poster_path;
          } else {
            poster = 'https://gearr.scannain.com/wp-content/uploads/2015/02/noposter.jpg';
          }
          return (
            <Card
              key={item.id}
              title={item.original_title}
              overview={item.overview}
              releaseDate={item.release_date}
              voteAverage={item.vote_average}
              poster={poster}
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