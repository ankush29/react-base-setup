import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchData from '../actions/circuitData';

const Home = ({ circuits }) => (
  <div>
    <h2>F1 2018 Season Calendar</h2>
    <ul>
      { circuits.map(({ circuitId, circuitName, Location }) => (
        <li key={circuitId}>
          { circuitName }
          {' '}
          -
          {' '}
          { Location.locality }
          ,
          {' '}
          { Location.country }
        </li>
      )) }
    </ul>
  </div>
);

Home.propTypes = {
  circuits: PropTypes.instanceOf(Array).isRequired
};

Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = state => ({
  circuits: state.data,
});


export default connect(mapStateToProps)(Home);
