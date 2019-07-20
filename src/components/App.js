import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';


class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App