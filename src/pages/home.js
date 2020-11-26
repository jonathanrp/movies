import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import Search from '../components/Search/views';
import List from '../components/shared/List';
import { fetchMovies, searchMovieBy } from '../components/Movies/actions';
import { colors, values } from '../variables';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterValue: 0,
      filteredMovies: [],
      displayMovies: [],
    };
  }

  componentDidMount(){
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Assign discover movies to displayMovies state when there are no search results
    if(nextProps.searchMovies.length > 0) {
      return {
        displayMovies: nextProps.searchMovies,
      };
    } else {
      return {
        displayMovies: nextProps.discoverMovies,
      };
    }
  }
  
  onInputChange = (event) => {
    // Update searchTerm state and clear filterValue
    this.setState({
      searchTerm: event.target.value,
      filterValue: 0,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const { searchMovieBy } = this.props;
    const { searchTerm } = this.state;
    // Clear filtered movies for new search
    this.setState({
      filteredMovies: [],
    });
    // Search Movies by term
    searchMovieBy(searchTerm);
  }

  onFilterChange = (filterValue) => {
    const { displayMovies } = this.state;
    // Filter movies 
    const filterMovies = displayMovies.filter(item => item.vote_average > (filterValue * 2));
    this.setState({ filterValue, filteredMovies:filterMovies });
  }

  renderMovies = () => {
    const { filterValue, displayMovies, filteredMovies } = this.state;
    let renderMovies;
    // Display filteredMovies when there are results or the filter is applied
    if ( filterValue > 0 || filteredMovies.length > 0 ) {
      renderMovies = filteredMovies;
    } else {
      renderMovies = displayMovies;
    }
    return renderMovies;
  }

  render(){
    const { searchTerm, filterValue, displayMovies, filteredMovies } = this.state;
    const renderMovies = this.renderMovies();
    return(
      <styles.Home>
        <Search
          searchTerm={searchTerm}
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
        />
        <styles.Rating>
          <p>Filter by rating:</p>
          <Rating
            name='movie-rating-filter'
            value={filterValue}
            onChange={(event, filterValue) => {
              this.onFilterChange(filterValue)
            }}
          />
        </styles.Rating>
        {renderMovies.length > 0 ? (
          <List items={renderMovies} />
        ):(
          <h3>No Movies Available</h3>
        )}
        
      </styles.Home>
    );
  }
}

const styles = {};

styles.Home = styled.div`
  background: ${colors.brandDark};
  min-height: 100vh;
  overflow: auto;
  h3 {
    text-align: center;
  }
`;

styles.Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${values.medMargin};
  p {
    margin-right: ${values.medMargin};
  }
  .MuiRating-iconEmpty {
    color: white;
  }
`;

const mapStateToProps = state => ({
  discoverMovies: state.movies.discoverMovies,
  searchMovies: state.movies.searchMovies,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies,
      searchMovieBy,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);