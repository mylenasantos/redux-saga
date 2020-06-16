import React from 'react';
import { connect } from 'react-redux';

const Footer = ({ count }) => <p>{`Você possui ${count} repos favoritos`}</p>;

const mapStateToProps = state => ({
  count: state.favorites.length
});

export default connect(mapStateToProps)(Footer);
