import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ loggedIn }) => (
  <div>
    <Link to="/">Homed</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    { loggedIn && <Link to="/secret">Secret</Link> }
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Header);
