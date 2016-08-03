import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component {
  
  render() {
    return (
      <div>
        Profile: {this.props.userData.name}        
      </div>
    )
  }

}



Profile.propTypes = {
  name: React.PropTypes.string  
};

export default Profile
