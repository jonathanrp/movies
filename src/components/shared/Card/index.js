import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, values } from '../../../variables';

const Card = ({ title, poster, overview, releaseDate, voteAverage }) => {
  const [isShowingDetails, toggleDetails] = useState(false);
  return (
    <>
      <styles.Card
        onClick={() => {
          toggleDetails(!isShowingDetails);
        }}
      >
        <div className="Poster">
          <img src={poster} alt={title} />
        </div>
        <p>{title}</p>
      </styles.Card>
      {isShowingDetails && (
        <styles.CardActive>
          <div className="Overlay"
            onClick={() => {
              toggleDetails(!isShowingDetails);
            }}
          ></div>
          <div className="CardActiveContent">
            <div className="CardActiveContentImage" style={{ backgroundImage: `url(${poster})` }}>
              <div className="CardClose"
                onClick={() => {
                  toggleDetails(!isShowingDetails);
                }}>
                X
              </div>
            </div>
            <div className="CardActiveContentText">
              <h1>{title}</h1>
              <p>{overview}</p>
              <p>Release: {releaseDate}</p>
              <p>Rating: {voteAverage}</p>
            </div>
          </div>
        </styles.CardActive>
      )}
    </>
  )
};

const styles = {};

styles.Card = styled.div`
  cursor: pointer;
  height: 320px;
  margin: ${values.medMargin};
  transition: all 0.7s ease;
  width: 165px;
  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.1);
    img {
      box-shadow: 0px 0px 40px 5px #000;
    }
  }
  .Poster {
    width: 165px;
    height: 250px;
    background: ${colors.brandDarker};
    border-radius: ${values.borderRadius};
    img {
      border-radius: ${values.borderRadius};
      box-shadow: 0px 0px 10px 5px #121218;
      transition: all 0.7s ease;
      width: 100%;
    }
  }
  
`;

styles.CardActive = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .Overlay {
    background: black;
    opacity: 0.8;
    width: 100%;
    height: 100%;
  }
  .CardActiveContent {
    background: ${colors.brandDark};
    border-radius: ${values.borderRadius};
    width: 80%;
    height: 80%;
    overflow: hidden;
    position: absolute;
    top: 10%;
    left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .CardActiveContentImage {
      position: relative;
      width: 100%;
      flex: 1;
      background-size: cover;
      background-position: top center;
    }
    .CardActiveContentText {
      width: 100%;
      padding: ${values.medMargin};
      box-sizing: border-box;
      max-width: 500px;
      h1 {
        color: white;
      }
    }
  }
  .CardClose {
    background: ${colors.brand};
    color: white;
    border-radius: ${values.borderRadius};
    width: 40px;
    height: 40px;
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
`;

export default Card;