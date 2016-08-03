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

  // Let's Get the User Data from GitHub
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'?client_id='+this.state.clientId+'&client_secret='+this.state.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);              
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);        
      }.bind(this)
    });
  }

// 'https://api.github.com/users/' + this.username + '/repos',

  componentDidMount() { 
    this.getUserData();
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
