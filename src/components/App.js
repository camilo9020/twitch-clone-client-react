import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
        </Router>
      </div>
    );
  }
}

export default App