import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {  
  render() {
    return (
        // Profile: {this.props.userData.name}
	    <div>
          <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.userData.name}</h3>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-4">
                        <img className="profile-img img-thumbnail" src={this.props.userData.avatar_url} style={{width:"50%"}} />
                        <a className="btn btn-default btn-block" href={this.props.userData.html_url} target="_blank">View Profile</a>
                    </div>
                    <div className="col-md-8">
                        <div className="stats">
                            <span className="label label-primary">{this.props.userData.public_repos} Public Repos</span>
                            <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
                            <span className="label label-info">{this.props.userData.followers} Followers</span>
                            <span className="label label-warning">{this.props.userData.following} Following</span>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Username: </strong> {this.props.userData.login}</li>
                            <li className="list-group-item"><strong>Location: </strong> {this.props.userData.location}</li>
                            <li className="list-group-item"><strong>Email: </strong> {this.props.userData.email}</li>
                            <li className="list-group-item"><strong>Blog: </strong> {this.props.userData.blog}</li>
                            <li className="list-group-item"><strong>Member Since: </strong> {this.props.userData.created_at}</li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.userData.name}</h3>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <div className="row">
                                <div className="col-md-9">
                                    <h4><a href="#" target="_blank"> Repo Name</a></h4>
                                    <p></p>
                                </div>
                                <div className="col-md-3">
                                    <span className="label label-primary"> Watchers</span>
                                    <span className="label label-success"> Forks</span>
                                </div>
                            </div>
                          <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>                
    )
  }

}

Profile.propTypes = {
  name: React.PropTypes.string  
};

export default Profile
