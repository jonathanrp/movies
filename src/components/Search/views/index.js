import React from "react";
import styled from 'styled-components';

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
    </form>
  </styles.Search>
)};

const styles = {};

styles.Search = styled.div`
  background: #121218;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="text"] {
    width: 300px;
    padding: 20px;
    border-radius: 50px;
    border: none;
    font-family: 'Roboto', sans-serif;
    outline: none;
  }
`;

export default Search;