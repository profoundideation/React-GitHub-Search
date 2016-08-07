import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component { render() { return (
<div>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">{this.props.userData.name}</h3>
    </div>
    <div className="panel-body">
      <div className="row">
        <div className="col-md-4">
          <img className="profile-img img-thumbnail profilePix" src={this.props.userData.avatar_url} style={{width: "100%"}} />          
          <a className="btn btn-default btn-block" href={this.props.userData.html_url} target="_blank">View Profile</a>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li className="list-group-item"><strong>UserName: </strong> {this.props.userData.login}</li>
            <li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
            <li className="list-group-item"><strong>Email: </strong> {this.props.userData.email}</li>
            <li className="list-group-item"><strong>Blog: </strong> {this.props.userData.blog}</li>
            <li className="list-group-item"><strong>Member Since: </strong> {this.props.userData.created_at}</li>
              <li className="list-group-item">
                <div className="stats">
                  <span className="label label-primary buttons-spacing1">{this.props.userData.public_repos} Public Repos</span>
                  <span className="label label-success buttons-spacing">{this.props.userData.public_gists} Public Gists</span>
                  <span className="label label-info buttons-spacing">{this.props.userData.followers} Followers</span>
                  <span className="label label-warning buttons-spacing">{this.props.userData.following} Following</span>
                </div>
              </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  </div>
  <hr />
  <h3>User Repos</h3>
  <RepoList userRepos={ this.props.userRepos} />
</div>
) } }

Profile.propTypes = { name: React.PropTypes.string };

export default Profile
