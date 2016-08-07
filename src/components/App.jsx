import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';
import Footer from './github/Footer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'github', // profoundhub
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
      url: 'https://api.github.com/users/'+this.state.userName+'/repos?per_page='+this.state.perPage+'&client_id='+this.state.clientId+'&client_secret='+this.state.clientSecret+'&sort=created',
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

  handleFormSubmit(userName) {
    // alert(userName);
    this.setState({userName: userName}, function(){
        this.getUserData();
        this.getUserRepos();
    })
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string,
};

App.defaultProps = {
  clientId: '0a59ddc213a95ee9adb6',
  clientSecret: '655a3af9c98d47e2e7e5c1b6aeed2ad696104c0a'
}

export default App
