import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'profoundhub',      
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
        this.setState({userData: data});
        console.log(data);              
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({userName: null});
        alert(err);        
      }.bind(this)
    });
  }

  // Let's Get the User's Repo Data from GitHub
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'/repos?per_page='+this.state.perPage+'client_id='+this.state.clientId+'&client_secret='+this.state.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userRepos: data});                
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({userName: null});
        alert(err);        
      }.bind(this)
    });
  }

  // 'https://api.github.com/users/' + this.username + '/repos',

  componentDidMount() { 
    this.getUserData();
    this.getUserRepos();
  }
  
  render() {
    return (
      <div>
        <Profile userData = {this.state.userData} />
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
