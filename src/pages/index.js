import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../store/actions/favorites';

class Main extends React.Component {
  state = {
    repositoryValue: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryValue);
    this.setState({ repositoryValue: '' });
  };

  render() {
    const { repositoryValue } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="usuario/repo"
            value={repositoryValue}
            onChange={e => this.setState({ repositoryValue: e.target.value })}
          ></input>

          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {this.props.favorites.map(elem => {
            return (
              <li key={elem.id}>
                <p>
                  <strong>{elem.name}</strong> ({elem.description})
                </p>
                <a href={elem.url}>Acessar</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
