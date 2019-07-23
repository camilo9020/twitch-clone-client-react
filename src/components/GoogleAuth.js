import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '616288083910-mc0ijslq14hl09dpkmtj4kvsakjkf7au.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if(this.state.isSignedIn){
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i> Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i> Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div className="item">{ this.renderAuthButton() }</div>
  }
}

export default GoogleAuth;