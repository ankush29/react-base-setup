import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import fetchData from '../actions/circuitData';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { circuits } = this.props;
    return (
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
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}


Home.propTypes = {
  circuits: PropTypes.instanceOf(Array).isRequired
};

Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = state => ({
  circuits: state.data,
});


export default connect(mapStateToProps)(Home);
