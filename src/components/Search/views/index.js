import React from "react";
import styled from 'styled-components';
import { colors } from '../../../variables';

const Search = ({ searchTerm, onInputChange, onFormSubmit }) => {
  return (
  <styles.Search>
    <form onSubmit={onFormSubmit}>
      <input
        type='text'
        value={searchTerm}
        onChange={onInputChange}
        placeholder="SEARCH MOVIES"
      />
      <input type='submit' />
    </form>
  </styles.Search>
)};

const styles = {};

styles.Search = styled.div`
  background: ${colors.brandDarker};
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="text"] {
    width: 180px;
    padding: 20px;
    border-radius: 50px;
    border: none;
    font-family: 'Roboto', sans-serif;
    outline: none;
  }
  input[type="submit"] {
    background: ${colors.brand};
    border: none;
    padding: 20px 30px;
    color: white;
    border-radius: 50px;
    margin-left: 10px;
    font-family: 'Roboto', sans-serif;
  }
`;

export default Search;