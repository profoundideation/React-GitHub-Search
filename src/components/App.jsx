import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'profoundhub',
      userProfile: [],
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }

  render() {
    return (
      <div>
        {this.state.userName}
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string,
};

App.defaultProps = {
  client: '0a59ddc213a95ee9adb6',
  clientSecret: '655a3af9c98d47e2e7e5c1b6aeed2ad696104c0a'
}

export default App
