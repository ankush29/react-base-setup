import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'test 1',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{ title }</h1>
        <Header />
        <Switch>
          { routes.map(route => <Route key={route.path} {...route} />) }
        </Switch>
      </div>
    );
  }
}
