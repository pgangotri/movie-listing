import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import HomeScreen from './HomeScreen';
import MovieDetails from './MovieDetails';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
          <Switch>
            <Route path="/" exact component={HomeScreen}/>
            <Route path="/:movieId" component={MovieDetails}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;